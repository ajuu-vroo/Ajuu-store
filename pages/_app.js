import 'tailwindcss/tailwind.css'
import Navbar from '../components/Navbar'
import { Provider } from 'next-auth/client'
import '../styles/globals.css'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
  <Provider session={pageProps.session}>
  <Head>
  <meta http-equiv="Content-Security-Policy" content="default-src 'self' data: gap: https://ssl.gstatic.com 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *;**script-src 'self' http://onlineerp.solution.quebec 'unsafe-inline' 'unsafe-eval';**" />
  </Head>
  <div className='font-nunito'>
  <Navbar />
  <Component {...pageProps} />
  </div>
  </Provider>
  ) 
}

export default MyApp
