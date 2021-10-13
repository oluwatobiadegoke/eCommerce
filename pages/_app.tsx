import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import Layout from "../components/layout/Layout";
import AppProvider from "../state/context/AppState";
import { store } from "../state/redux/redux-store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AppProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppProvider>
    </Provider>
  );
}
export default MyApp;
