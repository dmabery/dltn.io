/* eslint-disable @next/next/no-script-in-head */
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import "prismjs";
import { QueryClient, QueryClientProvider } from "react-query";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "../styles/globals.css";
import "../styles/prism-theme.css";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon 3.png" />
      </Head>
      <Nav />
      <div>
        <main className="mt-14 min-h-screen p-5 md:p-0 mx-auto max-w-[600px]">
          <QueryClientProvider client={queryClient}>
              <Component {...pageProps} />
              <Analytics />
          </QueryClientProvider>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
