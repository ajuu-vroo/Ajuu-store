import { useRouter } from 'next/router'

function Notification({ situation, messageProp }) {
    const router = useRouter()

    let succ = false;
    let fail = false;
    let pend = false;
    if (situation === 'success') {
        succ = true;
    } else if (situation === 'failed') {
        fail = true;
    } else if (situation === 'pending') {
        pend = true;
    } else {
        let none = true;
    }

    setTimeout(() => {
        if(succ){
            router.replace('/login')
        }
    }, 1000);

    return (
        <div className={`h-20 w-72 flex ${(succ && 'bg-green-500') || (fail && 'bg-red-500') || (pend && 'bg-yellow-500')}`}>
            {(fail && <div className="flex align-center items-center pl-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h1 className='text-white'>{messageProp ? (messageProp) : 'Uh Oh! Something went wrong.'}  </h1>
            </div>) || (succ && <div className="flex align-center items-center pl-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h1 className='text-white'>Your account has been created! </h1>
            </div>) || pend && <div className="flex align-center items-center pl-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h1 className='text-white'>Please wait ...</h1>
            </div>}
        </div>
    )
}

export default Notification
