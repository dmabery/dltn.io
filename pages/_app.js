import '../styles/globals.css';
import Head from 'next/head'
import Nav from '../components/Nav'
import Subscribe from '../components/Subscribe';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next and MDX Blog</title>
      </Head>
      <div className="container mx-auto max-w-screen-md p-5">
        <Nav />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  )
}

export default MyApp;