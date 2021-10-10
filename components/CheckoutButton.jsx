import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import {useSession} from 'next-auth/client'
import Link from 'next/link'

function CheckoutButton({cart}){
    const[session] = useSession();

    const stripePromise = loadStripe(`${process.env.stripe_public_key}`);
    async function createCheckoutSession(){
        const stripe = await stripePromise;
        const checkoutSession = await axios.post('ajuu-store-6ge3ie8xy-ajuu-vroo.vercel.app/api/create-checkout-session',
        {
            items : JSON.parse(localStorage.getItem('products')),
            email : session?.user?.email
        });

        const result = await stripe.redirectToCheckout({
            sessionId: checkoutSession.data.id,
        });
        if(result.error){
            alert(result.error.message)
        }

    }
    return (
        <div>
            <div className=" bg-white h-36 w-[360px] mt-3 rounded-md border-2 border-[#392429] dark:bg-gray-800 shadow text-center p-4">
                    <div className="flex h-full items-center justify-between">
                        <div className="flex h-full flex-col justify-between">
                            
                            <div>
                                <p className="mb-0 text-left text-gray-500 dark:text-gray-300">
                                    {`There are ${cart.length} item(s)`} <br /> in your cart.
                                </p>
                                
                            </div>
                        </div>
                        <div className="flex h-full flex-col justify-between">
                            <p className="text-gray-900 dark:text-white text-4xl font-bold">
                                <span className="text-sm">
                                    ₹
                                </span>
                                {cart.map(item => item.price).reduce((a,b)=> a+b)}
                                <span className="text-gray-300 text-sm">
                                    (Free Delivery)
                                </span>
                            </p>
                            {session?(<button type="button" className="py-2 px-4  bg-[#392429] hover:bg-[#362126] focus:ring-[#392429] focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " onClick={createCheckoutSession}>
                                Proceed to Checkout
                            </button>):
                            (<Link href='/login'><button type="button" className="py-2 px-4  bg-[#392429] hover:bg-[#362126] focus:ring-[#392429] focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Login to Continue
                        </button></Link>)}
                            
                        </div>
                    </div>
                </div>

        </div>
    )
}

export default CheckoutButton
