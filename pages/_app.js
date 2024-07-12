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
      <div className="mx-auto max-w-[650px] py-8">
        <main className="mb-auto p-5 min-h-screen mt-20">
          <QueryClientProvider client={queryClient}>
              <Component {...pageProps} />
              <Analytics />
          </QueryClientProvider>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
