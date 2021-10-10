// import { ApiError } from "next/dist/next-server/server/api-utils"

function success() {
    return (
        <div className='pt-20 flex flex-col items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-green-500 animate-bounce" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />

            </svg>
            <div>
                <h1 className='text-2xl font-bold text-center tracking-tighter'>
                    Thank you, your order has been placed!
                </h1>
                <h1 className='mt-4 text-lg font-medium text-gray-600  text-center'>
                    Your Order has been placed successfully. Thanks for your purchase. <br />
                    Hope you had a great time.
                </h1>
            </div>

        </div>
    )
}

export default success
