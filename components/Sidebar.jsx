// import Link from 'next/link'
import { signOut, useSession } from "next-auth/client"

function Sidebar() {
    const [session] = useSession();

    return (<div className='flex flex-col animate-dragUp fixed z-30 w-full pt-12'>
        <div className='h-full w-full bg-[#950740] text-white flex flex-col text-center pt-4'>
            {session ? <div className='space-y-2 '><h1>You are logged in as {session.user.name}</h1>
                <h1 onClick={() => signOut()} className='group'>You can <span className='group-active:underline'>Log Out</span> by clicking here.</h1></div> :
                (<div><a href='/login'><h1 className=' active:underline'>Log in to your Account</h1></a>
                    <a href='/sign-up-now'><h1 className=' active:underline'>Sign Up with New Account</h1></a> </div>)
            }
            <div className='h-[2px] bg-white w-full mt-3 mb-2' />
            <div>
                <h1 className='font-semibold text-lg'>Categories</h1>
                <div className='space-y-1'>
                    <a href="clothing-mens"><h1 className='underline mt-1'>Men's Clothing</h1></a>
                    <a href="clothing-womens"><h1 className='underline'>Women's Clothing</h1></a>
                    <a href="beauty"><h1 className='underline'>Beauty</h1></a>
                    <a href="electronics"><h1 className='underline '>Electronics</h1></a>
                    <a href="jewellery"><h1 className='underline'>Jewellery</h1></a>
                </div>
            </div>
            <div className=' h-36 w-full bg-gradient-to-b from-[#950740] to-[#6f2232]' />
        </div>


    </div>
    )
}

export default Sidebar
