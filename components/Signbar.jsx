import Link from 'next/link'
import { useSession, signOut} from 'next-auth/client';
import { useRouter } from 'next/router'

function Signbar() {
    const [session] = useSession();
    const router = useRouter()

    return (
        <div className='hidden sm:flex text-xs mt-2'>
            {
                session ? (<Link href='#'>
                <h1 className='px-2 group cursor-pointer'>Welcome !<br/>
                   <span className='group-hover:underline'>{session.user.name}</span>
                </h1> 
                </Link>) :
            (<Link href='/sign-up-now'>
            <h1 className='px-2 group cursor-pointer'>New to our site?<br/>
               <span className='group-hover:underline'>SIGN up</span>  here.
            </h1> 
            </Link>)
}
            {session?(
            <h1 className='px-2 group cursor-pointer'  onClick={()=>{
                router.replace('/')
                signOut();
            }}>
            <span className='group-hover:underline'> CLICK here</span> <br /> to Log Out.
            </h1>
            ):(<Link href='/login'>
            <h1 className='px-2 group cursor-pointer'>
                Existing user? <br /> <span className='group-hover:underline'> LOG in</span> now.
            </h1>
            </Link>)}
        </div>
    )
}

export default Signbar
