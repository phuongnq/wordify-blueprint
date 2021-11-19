import React, { useEffect } from 'react';
import { addAuthoringSupport } from '@craftercms/ice';
import { isAuthoring } from '../shared/utils';
import { GlobalContextProvider } from '../shared/context';
import AppIntl from '../shared/AppIntl';
import '../styles/globals.css'

function App({ Component, pageProps }) {
  useEffect(() => {
    if (isAuthoring()) {
      addAuthoringSupport();
    }
  }, []);
  const jQuery = process.browser ? window.jQuery : null;
  return (
    <GlobalContextProvider jQuery={jQuery}>
      <AppIntl>
        <Component {...pageProps} />
      </AppIntl>
    </GlobalContextProvider>
  );
}

export default App;
