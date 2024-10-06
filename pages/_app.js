/* eslint-disable @next/next/no-script-in-head */
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import "prismjs";
import { QueryClient, QueryClientProvider } from "react-query";
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
      <nav className="mt-5 ml-20 mb-10 max-w-[650px]">
        <Nav/>
      </nav>
      <div className="max-w-[620px] p-3 md:mt-20 md:p-0">
        <main className="mb-auto min-h-screen pl-20 pb-32">
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
            <Analytics />
          </QueryClientProvider>
        </main>
      </div>
    </>
  );
}

export default MyApp;
