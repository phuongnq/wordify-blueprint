/*
 * Copyright (C) 2007-2020 Crafter Software Corporation. All Rights Reserved.
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

import React, { Suspense, useEffect, useState } from 'react';
import BaseLayout from '../shared/BaseLayout';
import { FormattedMessage } from 'react-intl';
import SidebarSearch from '../shared/SidebarSearch';
import RecentPostsAside from '../shared/RecentPostsAside';
import { SidebarCategories, SidebarTags } from '../shared/SidebarTaxonomies';
import { useSearchQuery, useUrlSearchQueryFetchResource } from '../shared/hooks';
import PostCard, { LANDSCAPE } from '../shared/PostCard';
import CircularProgressSpinner from '../shared/CircularProgressSpinner';
import { useRouter } from 'next/router'
import Paginate from '../shared/Paginate';
import SidebarBios from '../shared/SidebarBios';

import { getProps, useTaxonomiesResource } from '../shared/ssr';

function SearchResults({ resource, paginationData, onPageChange }) {
  const res= resource.read();
  const hits = res.hits;
  const total = res.total;

  const totalResults = typeof total === 'object' ? total.value : total;
  const pageCount = Math.ceil(totalResults/paginationData.itemsPerPage);
  return (
    <>
      <p>{totalResults} result{totalResults === 0 || totalResults > 1 ? 's' : ''} found.</p>
      {
        hits.map((post) =>
          <PostCard key={post.craftercms.id} model={post} format={LANDSCAPE} />
        )
      }

      {
        pageCount > 1 &&
        <div className="col-md-12 text-center mt-5">
          <Paginate
            pageCount={pageCount}
            onPageChange={(index) => onPageChange(index * paginationData.itemsPerPage)}
          />
        </div>
      }
    </>
  );
}

function Search(props) {
  const {
    model,
    meta: {
      siteTitle,
      socialLinks
    },
    taxonomiesResource,
  } = props;
  const [paginationData, setPaginationData] = useState({
    itemsPerPage: 10,
    currentPage: 0
  });

  const router = useRouter();
  const [query] = useSearchQuery();

  let resource;
  if (process.browser) {
    resource = useUrlSearchQueryFetchResource(paginationData.itemsPerPage);
  }

  const onPageChange = (page) => {
    setPaginationData({ ...paginationData, currentPage: page});
    const url = `/search?q=${query}&p=${page}`;
    router.push(url);
  }

  return (
    <BaseLayout siteTitle={siteTitle} socialLinks={socialLinks}>
      <section className="site-section pt-5 py-sm">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="mb-4">
                <FormattedMessage
                  id="common.latestPostSectionTitle"
                  defaultMessage="Search Results"
                />
              </h2>
            </div>
          </div>
          <div className="row blog-entries">
            <div className="col-md-12 col-lg-8 main-content">
              <div className="row" suppressHydrationWarning={true}>
                {process.browser && (
                  <Suspense fallback={<CircularProgressSpinner screenHeight={false} />}>
                    <SearchResults
                      resource={resource}
                      paginationData={paginationData}
                      onPageChange={onPageChange}
                      resource={resource}
                    />
                  </Suspense>
                )}
              </div>
            </div>
            <div className="col-md-12 col-lg-4 sidebar">

              <SidebarSearch />

              <SidebarBios model={model} fieldId="bios_o" />

              <RecentPostsAside />

              <SidebarCategories taxonomiesResource={taxonomiesResource} />

              <SidebarTags taxonomiesResource={taxonomiesResource} />

            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}

export async function getServerSideProps(context) {
  const url = '/search';
  const limit = 8;
  const page = 0;

  const props = await getProps(url, limit, page);
  const taxonomiesResource = await useTaxonomiesResource();
  props.taxonomiesResource = taxonomiesResource;

  const searchQuery = context.query.q ?? '';
  const searchPage = context.query.p ?? 0;

  props.searchQuery = searchQuery;
  props.searchPage = searchPage;

  return { props };
}

export default Search;
