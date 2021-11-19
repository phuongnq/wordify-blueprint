import { parseDescriptor } from '@craftercms/content';

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