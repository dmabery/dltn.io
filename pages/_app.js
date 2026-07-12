/* eslint-disable @next/next/no-script-in-head */
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import { useRouter } from "next/router";
import "prismjs";
import { QueryClient, QueryClientProvider } from "react-query";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";
import "../styles/prism-theme.css";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isHomepage = router.pathname === "/";

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon 3.png" />
      </Head>
      <div className="min-h-screen bg-[#e9e6db] p-3 font-serif md:p-6">
        <div className="mx-auto max-w-[680px] border border-[#999] bg-white p-4 text-[#111] md:p-7">
          <Header homepage={isHomepage} />
          <main>
            <QueryClientProvider client={queryClient}>
              <Component {...pageProps} />
              <Analytics />
            </QueryClientProvider>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default MyApp;
