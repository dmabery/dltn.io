import '../styles/globals.css';
import Head from 'next/head'
import Nav from '../components/Nav'
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';
import { MDXProvider } from "@mdx-js/react"
import SideNote from '../components/SideNote';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>dalton mabery</title>
        <link rel="icon" href="/favicon 3.png"></link>
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