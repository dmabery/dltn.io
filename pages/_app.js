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
    <div className="bg-white md:px-10 px-0">
      <nav className="py-3 px-0 md:px-10 ml-0 mb-10">
        <Nav/>
      </nav>
      <div className="md:p-10 max-w-[650px]">
      <Head>
        <link rel="icon" href="/favicon 3.png" />
      </Head>
      <div className="p-3 md:p-0">
        <main className="mb-auto min-h-screen pb-32">
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
            <Analytics />
          </QueryClientProvider>
        </main>
        </div>
      </div>
    </div>
  );
}

export default MyApp;
