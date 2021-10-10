import 'tailwindcss/tailwind.css'
import Navbar from '../components/Navbar'
import { Provider } from 'next-auth/client'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
  <Provider session={pageProps.session}>
  <div className='font-nunito'>
  <Navbar />
  <Component {...pageProps} />
  </div>
  </Provider>
  ) 
}

export default MyApp
