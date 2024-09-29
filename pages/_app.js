/* eslint-disable @next/next/no-script-in-head */
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import "prismjs";
import { QueryClient, QueryClientProvider } from "react-query";
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
      <div>
        <Nav />
        <main className="mb-auto">
          <QueryClientProvider client={queryClient}>
              <Sidebar>
                <Component {...pageProps} />
                <Analytics />
              </Sidebar>
          </QueryClientProvider>
        </main>
      </div>
    </>
  );
}

export default MyApp;
