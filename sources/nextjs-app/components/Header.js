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

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useNavigation } from '../shared/hooks';
import SearchForm from '../shared/SearchForm';
import { useGlobalContext } from '../shared/context';

function NavLink({ href, exact, children, ...props }) {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
      props.className += ' active';
  }

  return (
      <Link href={href}>
          <a {...props}>
              {children}
          </a>
      </Link>
  );
}

export default function Header({ siteTitle, socialLinks }) {
  const nav = useNavigation();

  const [{ $ }] = useGlobalContext();
  const toggleNavBar = (e) => {
    e.preventDefault();
    $('#navbarMenu').toggleClass('show');
  };

  return (
    <header role="banner">
      <div className="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-9 social">
              {
                socialLinks?.map((link) =>
                  <Link key={link.socialNetwork_s} href={link.url_s}>
                    <a target="_blank" rel="noopener noreferrer">
                      <span className={'fa fa-' + link.socialNetwork_s} />
                    </a>
                  </Link>
                )
              }
            </div>
            <div className="col-3 search-top">
              <SearchForm
                classes={{ form: 'search-top-form' }}
                placeholder="Type keyword to search..."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container logo-wrap">
        <div className="row pt-5">
          <div className="col-12 text-center">
            <a
              className="absolute-toggle d-block d-md-none" data-toggle="collapse"
              href="#navbarMenu" role="button"
              onClick={toggleNavBar}
              aria-expanded="false" aria-controls="navbarMenu"
            ><span className="burger-lines"></span></a>
            <h1 className="site-logo"><Link href="/">{siteTitle}</Link></h1>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav mx-auto">
              {
                nav?.sort(
                  (
                    { orderDefault_f: a },
                    { orderDefault_f: b }
                  ) => (a < b) ? -1 : ((a > b) ? 1 : 0)
                ).map((page) =>
                  <li className="nav-item" key={page.url}>
                    <NavLink
                      exact
                      className="nav-link"
                      href={page.url}
                    >
                      {page.navLabel}
                    </NavLink>
                  </li>
                )
              }
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
