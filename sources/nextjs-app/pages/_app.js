import { GlobalContextProvider } from '../shared/context';
import AppIntl from '../shared/AppIntl';
import '../styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <GlobalContextProvider>
      <AppIntl>
        <Component {...pageProps} />
      </AppIntl>
    </GlobalContextProvider>
  );
}

export default App;
