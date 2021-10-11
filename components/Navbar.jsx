import { useState,useEffect } from "react"
import Sidebar from "./Sidebar"
import Searchbar from "./Searchbar"
import Signbar from "./Signbar"
import Link from "next/link"

function Navbar() {

    const [appear, setAppear] = useState(false);
    const[cart,setCart] = useState([]);
    useEffect(() => {
        setInterval(() => {
            setCart(JSON.parse(localStorage.getItem('products')))
        }, 1000);
        
    }, [])
    return (<>
        <div className='bg-[#392429] text-white flex justify-between pb-3 pt-1 w-full fixed z-50' >
            {!appear &&
                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 sm:hidden" onClick={() => setAppear(!appear)} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>}
            {appear &&
                <svg xmlns="http://www.w3.org/2000/svg"
                onClick={() => setAppear(false)} className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            }
            <div className='flex items-center text-2xl sm:pr-5 cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                </svg>
                <Link href='/'>
                    <h1 className='animate-dragUp'>𝔸𝕛𝕦𝕦 𝕊𝕥𝕠𝕣𝕖</h1>
                </Link>
            </div>
            <Searchbar />
            <Signbar />
            <Link href='/shoppingCart'>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 ml-5 mr-4 cursor-pointer sm:mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <div type="button" className="w-5 h-5 text-center  rounded-full text-[#392429] bg-white absolute top-1 right-1">
                    <span className="p-1 font-semibold italic">
                        {cart?.length || '0'}
                    </span>
                </div>
                </div>
            </Link>

        </div>
        {appear &&  <Sidebar /> }
    </>

    )
}

export default Navbar
