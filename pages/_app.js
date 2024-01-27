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

      <nav className="container mx-auto max-w-[920px] bg-white">
        <Nav className="" />
      </nav>
      <div className="mx-auto max-w-[920px] rounded bg-white px-5 py-8 md:px-10">
        <main className="mb-auto min-h-screen">
          <QueryClientProvider client={queryClient}>
            <Sidebar>
              <Component {...pageProps} />
              <Analytics />
            </Sidebar>
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
