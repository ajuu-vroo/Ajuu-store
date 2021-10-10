import { useSession } from 'next-auth/client'
import Head from 'next/head'
import { useState } from 'react';
import Banner from '../components/Banner';
import PhoneMenu from '../components/PhoneMenu';
import ProductFeed from '../components/ProductFeed';


export default function Home({ productInfo }) {

  const [session] = useSession();

  const [alert, setAlert] = useState(true)

  setTimeout(() => {
    if (session) {
      setAlert(false);

    }
  }, 3000);
  return (

    <div className='pt-11 lg:pl-0' >
      <Head >
        <title>Ajju Store - Demo eCommerce website</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@900&display=swap" rel="stylesheet" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400&display=swap" rel="stylesheet" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400&family=Overlock:ital@1&display=swap" rel="stylesheet" />
      </Head>

      {session && alert && <div className="border-4 text-white font-bold animate-swipeUp overflow-hidden border-green-500 bg-green-500 h-12 w-72 flex items-center justify-center fixed bottom-0 right-0 z-40 ">
        {"You are logged in as" + " " + session.user.name}

      </div>}
      {/* Banner component */}
      <Banner />
      <PhoneMenu />
      <ProductFeed productInfo={productInfo} />

    </div>
  )
}

export async function getStaticProps(context) {
  const productInfo = await fetch('https://fakestoreapi.com/products').then((data) => data.json());
  // console.log(productInfo)
  return {
    props: { productInfo }
  }
}
