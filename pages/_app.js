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
      <nav className="container mx-auto mb-20 max-w-[650px]">
        <Nav className="" />
      </nav>
      <div className="mx-auto mt-2 max-w-[650px] md:mt-5">
        <main className="mb-auto min-h-screen">
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
            <Analytics />
          </QueryClientProvider>
        </main>
        <footer className="h-10">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default MyApp;
