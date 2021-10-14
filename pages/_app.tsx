import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import Layout from "../components/layout/Layout";
import { store } from "../state/redux/redux-store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
export default MyApp;
