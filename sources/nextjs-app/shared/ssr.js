/*
 * Copyright (C) 2007-2021 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import { parseDescriptor } from '@craftercms/content';

import { fetchQuery } from '../fetchQuery';
import byUrlQuery from '../shared/queries.graphql';

const DEFAULT_LIMIT = 8;
const DEFAULT_PAGE = 0;

export async function getProps(url, limit = DEFAULT_LIMIT, page = DEFAULT_PAGE) {
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
};

export async function getTaxonomiesResource() {
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
};
