/* eslint-disable @next/next/no-script-in-head */
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import "prismjs";
import { QueryClient, QueryClientProvider } from "react-query";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
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
      <div className="mx-auto md:max-w-[950px] px-5 md:px-0 py-8">
        <main className="mb-auto min-h-screen md:m-5 lg:m-0">
          <QueryClientProvider client={queryClient}>
            <Sidebar>
              <Component {...pageProps} />
              <Analytics />
            </Sidebar>
          </QueryClientProvider>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
