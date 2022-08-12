import '../styles/globals.css';
import "prismjs";
import "../styles/prism-theme.css"
import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon 3.png" />
      </Head>

      <div className="flex flex-col justify-between">
        <div className="container mx-auto md:max-w-[65%] p-5 flex flex-col">
          <nav>
            <Nav className=""/>
          </nav>
          <main className="mb-auto min-h-screen">
              <Component {...pageProps} />
          </main>
        </div>
      <footer className="h-10">
         <Footer />
      </footer>
        
      </div>
      
    </>
  )
}

export default MyApp;