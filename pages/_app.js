import '../styles/globals.css';
import "prismjs";
import "../styles/prism-theme.css"
import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon 3.png" />
      </Head>

      <div className="flex flex-col justify-between">
        <div className="container mx-auto max-w-screen-lg pl-5 plb-5 pr-5 justify-between ">
            <Nav className=""/>
            <Sidebar>
                  <Component {...pageProps} />
            </Sidebar>
        </div>
      <footer className="h-10">
         <Footer />
      </footer>
        
      </div>
      
    </>
  )
}

export default MyApp;