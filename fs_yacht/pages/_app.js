import Head from 'next/head';
import 'styles/globals.css';
import { Provider } from 'next-auth/client';

function MyApp({ Component, pageProps }) {
  //pageProps - zczytuje propsy z kazdej podstorny
  return (
    <Provider session={pageProps.session}>
      <Head>
        <title>{pageProps.metaTitle ?? 'Yachting App'}</title>
        <meta
          name="description"
          content={pageProps.metaDescription ?? 'Search for all types of boat'}
        />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
