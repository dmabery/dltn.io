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

      <div className="container m-4 px-10 mx-auto max-w-screen-md rounded-md border border-5 border-blue-300 bg-[#111827]">
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