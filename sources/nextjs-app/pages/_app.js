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
