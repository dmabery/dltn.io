/* eslint-disable @next/next/no-script-in-head */
import { Analytics } from '@vercel/analytics/react';
import "prismjs";
import { QueryClient, QueryClientProvider } from 'react-query';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import '../styles/globals.css';
import "../styles/prism-theme.css";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <div className=''>
      <nav>
        <Nav/>
      </nav>
          <main className=''>
            <QueryClientProvider client={queryClient}>
              <Component {...pageProps} />
              <Analytics />
            </QueryClientProvider>
          </main>
          <footer className="h-10">
            <Footer />
          </footer>
    </div>
  )
}

export default MyApp;