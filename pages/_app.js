import "@/styles/globals.css";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(App);
