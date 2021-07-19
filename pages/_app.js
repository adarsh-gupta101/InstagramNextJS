import "../styles/globals.css";
import "../styles/loginstyles.css";
import "../styles/main.css"
import { Provider } from 'react-redux';

import store from "../app/store.js"

function MyApp({ Component, pageProps }) {

  return(
<Provider store={store}>
  <Component {...pageProps} />;
  </Provider>)
}

export default MyApp;
