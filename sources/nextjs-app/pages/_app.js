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

import React, { useState, useEffect } from 'react';
import Script from 'next/script';
import { addAuthoringSupport, fetchIsAuthoring } from '@craftercms/ice';
import { GlobalContextProvider } from '../shared/context';
import AppIntl from '../shared/AppIntl';
import '../styles/globals.css'

function App({ Component, pageProps }) {

  useEffect(() => {
    if (fetchIsAuthoring().then((isAuthoring) => {
      if (isAuthoring) {
        addAuthoringSupport();
      }
    }));
  }, []);

  return (
    <>
      <Script
        src="/static-assets/js/jquery-3.2.1.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/static-assets/js/owl.carousel.min.js"
        strategy="beforeInteractive"
      />
      <GlobalContextProvider jQuery={process.browser? window.jQuery : null}>
        <AppIntl>
          <Component {...pageProps} />
        </AppIntl>
      </GlobalContextProvider>
    </>
  );
}

export default App;
