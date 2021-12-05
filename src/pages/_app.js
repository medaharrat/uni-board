import '../../styles/globals.css'
import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
      <>
          <Head>
              <title>ELTE - Uniboard</title>
          </Head>

          <div className="app-container bg-light">
              <div className="container pt-4 pb-4">
                <Component {...pageProps} />
              </div>
          </div>
      </>
  );
}
export default App