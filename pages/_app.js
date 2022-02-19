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
        <title>dalton mabery</title>
        <link rel="icon" href="/favicon 3.png"></link>

      
        <link href="/styles/Prism.css" rel="stylesheet" />
          
      </Head>
      <div className="flex flex-col justify-between">
        <div className="container mx-auto max-w-screen-md p-5 flex flex-col justify-between">
          <nav>
            <Nav className=""/>
          </nav>
          <main className="mb-auto">
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