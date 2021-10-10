import { useState, useEffect } from "react";
import CheckoutButton from "../components/CheckoutButton";
import CheckoutProducts from '../components/CheckoutProducts'

function shoppingCart() {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        setInterval(() => {
            setCart(JSON.parse(localStorage.getItem('products')))
        }, 1000);
    }, [])
    return (
        <div className='bg-gray-200 min-h-screen pt-16 relative' >
            <div className='flex'>
                <h1 className='hidden lg:flex pl-4 pt-4 text-2xl font-semibold text-[#392429] underline italic'>{cart?.length >= 1 ? `Your Shopping Basket:   Subtotal(₹${cart.map((item) => item.price).reduce((a, b) => a + b)}.00)` : 'Your Shopping Basket is Empty !'}</h1>
                <div  className='flex border-2 border-gray-700 rounded-lg overflow-hidden w-52 h-22 mx-auto  sm:mr-0 bg-white'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJkMSQRf5Tsf4eUJPc7Om5bjS2JH25p1n9kA&usqp=CAU' alt='' className=' h-16' />
                    <h1 className='font-bold italic text-xl text-center text-gray-700'>100% Safe and Secure Payments.</h1>
                </div>
            </div>
            <div className='flex flex-col items-center md:flex-row md:items-baseline md:justify-between px-3'>
                <div>
                    {cart?.map((item,index) => {
                        return <CheckoutProducts item={item} key={index} />
                    })}
                </div>
                {cart?.length >= 1 && <CheckoutButton cart={cart} />}
            </div>
            {cart?.length ===0 &&
            <div>
                <img src='https://sethisbakery.com/assets/website/images/empty-cart.png' alt='' className='t-10 h-[500px] w-[500px] object-cover rounded-full mx-auto' />
            </div>}
        </div>
    )
}

export default shoppingCart
