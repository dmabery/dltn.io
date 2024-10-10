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
    <div className="px-0 mx-auto max-w-[610px]">
      <nav className="py-3 mb-10">
        <Nav/>
      </nav>
      <Head>
        <link rel="icon" href="/favicon 3.png" />
      </Head>
        <main className="mb-auto min-h-screen pb-32">
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
            <Analytics />
          </QueryClientProvider>
        </main>
    </div>
  );
}

export default MyApp;
