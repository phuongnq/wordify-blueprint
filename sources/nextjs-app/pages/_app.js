import { GlobalContextProvider } from '../shared/context';
import '../styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <GlobalContextProvider>
      <Component {...pageProps} />
    </GlobalContextProvider>
  );
}

export default App;
