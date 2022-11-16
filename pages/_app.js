/* eslint-disable @next/next/no-script-in-head */
import { Analytics } from '@vercel/analytics/react';

import Head from 'next/head';
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
      </Head>

      <div className="container px-5 mx-auto max-w-screen-md">
          <nav>
            <Nav className=""/>
          </nav>
          <main className="mb-auto min-h-screen">
              <Component {...pageProps} />
              <Analytics />
          </main>
          <footer className="h-10">
            <Footer />
          </footer>
      </div>
      
    </>
  )
}

export default MyApp;