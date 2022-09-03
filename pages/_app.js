/* eslint-disable @next/next/no-script-in-head */
import Head from 'next/head';
import Script from 'next/script';
import "prismjs";
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import '../styles/globals.css';
import "../styles/prism-theme.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon 3.png" />
        <Script strategy="lazyOnLoad" id="ga-script" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTIC}`}></Script>
        <Script strategy="lazyOnLoad" id="ga-script">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config','{process.env.NEXT_PUBLIC_GOOGLE_ANALYTIC}');
            `}
          </Script>
      </Head>

      <div className="container px-5 mx-auto max-w-screen-md">
          <nav>
            <Nav className=""/>
          </nav>
          <main className="mb-auto min-h-screen">
              <Component {...pageProps} />
          </main>
          <footer className="h-10">
            <Footer />
          </footer>
      </div>
      
    </>
  )
}

export default MyApp;