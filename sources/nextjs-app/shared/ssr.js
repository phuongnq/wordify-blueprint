import { parseDescriptor } from '@craftercms/content';
import { createQuery, search } from '@craftercms/search';
import { map } from 'rxjs/operators';
import { crafterConfig, createResource, preParseSearchResults } from './utils';

import { fetchQuery } from '../fetchQuery';
import byUrlQuery from '../shared/queries.graphql';

export async function getProps(url, limit, page) {
  const pagination = { limit, offset: page ? (page * limit) : 0 };
  const res = await fetchQuery(
    { text: byUrlQuery },
    {
      url: `.*${url === '/' ? 'website/index' : url}.*`,
      includePosts: true,
      postsLimit: pagination.limit,
      postsOffset: pagination.offset
    }
  );

  const data = res.data;
  const model = parseDescriptor(data.content.items?.[0]);
  const levelDescriptor = data.levelDescriptors.items
    .filter(levelDescriptor => levelDescriptor.file__name === 'crafter-level-descriptor.level.xml')
    .map(levelDescriptor => levelDescriptor)[0];

  return {
    model,
    meta: {
      siteTitle: levelDescriptor.siteTitle_s,
      socialLinks: levelDescriptor.socialLinks_o.item,
      disqus: {
        websiteShortname: levelDescriptor.websiteShortname_s
      },
      posts: {
        total: data.posts.total,
        ...pagination
      }
    },
  };
}

export async function useTaxonomiesResource() {
  const res = await fetchQuery({
    text: `
    query Taxonomies {
      taxonomy {
        total
        items {
          guid: objectId
          path: localId
          contentTypeId: content__type
          dateCreated: createdDate_dt
          dateModified: lastModifiedDate_dt
          label: internal__name
          items {
            item {
              key
              value
              image_s
            }
          }
        }
      }
    }
  `
  });

  return res;
}

const contentTypes = ['/component/post'];
export async function useUrlSearchQueryFetchResource(query, page, size = 1) {
  const fields = ['headline_t^1.5', 'content_o.item.component.content_html^1'];
    let searchQuery = {};
    let userTerm = query;
    searchQuery.filter = [
      {
        'terms': {
          'content-type': contentTypes.map(id => id)
        }
      }
    ];

    if (userTerm) {
      // Check if the user is requesting an exact match with quotes
      const regex = /.*("([^"]+)").*/;
      const matcher = userTerm.match(regex);
      if (matcher) {
        // Using must excludes any doc that doesn't match with the input from the user
        searchQuery.must = [
          {
            'multi_match': {
              'query': matcher[2],
              'fields': fields,
              'fuzzy_transpositions': false,
              'auto_generate_synonyms_phrase_query': false
            }
          }
        ];

        // Remove the exact match to continue processing the user input
        userTerm = userTerm.replace(matcher[1], '');
      } else {
        // Exclude docs that do not have any optional matches
        searchQuery.minimum_should_match = 1;
      }

      if (userTerm) {
        // Using should makes it optional and each additional match will increase the score of the doc
        searchQuery.should = [
          {
            'multi_match': {
              'query': userTerm,
              'fields': fields,
              'type': 'phrase_prefix',
              'boost': 1.5
            }
          },
          {
            'multi_match': {
              'query': userTerm,
              'fields': fields
            }
          },
          {
            'match': {
              'pageDescription_s': userTerm
            }
          },
          {
            'match': {
              'categories_o.item.value_smv': userTerm
            }
          }
        ]
      }
    }

    const url = `${crafterConfig.baseUrl}/api/1/site/elasticsearch/search?crafterSite=${crafterConfig.site}`;
    const body = {
      query: {
        'bool': searchQuery
      }
    };

    const res = await fetch(url, {
      headers: {
        'content-type': 'application/json',
      },
      body,
      method: 'POST'
    });
    const data = await res.json();
    console.log(data);
    return data;
}