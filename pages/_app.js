import '../styles/globals.css';
import Head from 'next/head'
import Nav from '../components/Nav'
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>dalton mabery</title>
      </Head>
      <div className="container mx-auto max-w-screen-md p-5 flex flex-col h-screen justify-between">
        <nav>
          <Nav className=""/>
        </nav>
        <main className="mb-auto">
          <Component {...pageProps} />
        </main>
        <footer className="h-10">
          <Footer />
        </footer>
        
      </div>
      
    </>
  )
}

export default MyApp;