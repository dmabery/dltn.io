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
      <Nav />
      <div>
        <main className="mt-16 mx-auto max-w-[1000px]">
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
