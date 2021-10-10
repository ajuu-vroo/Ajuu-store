import Link from 'next/link';

function Categories() {
    return (
        <div className=' h-40 w-48 pl-2 leading-relaxed bg-gray-50 text-red-900 absolute rounded-lg shadow-md '> 
        <Link href='clothing-mens'><h1 className='hover:underline cursor-pointer'>Men's Clothing</h1></Link>
        <Link href='clothing-womens'><h1 className='hover:underline cursor-pointer'>Women's Clothing</h1></Link>
        <Link href='beauty'><h1 className='hover:underline cursor-pointer'>Beauty</h1></Link>
        <Link href='electronics'><h1 className='hover:underline cursor-pointer'>Electronics</h1></Link>
        <Link href='jewellery'><h1 className='hover:underline cursor-pointer'>Jewellery</h1></Link>
        </div>
    )
}

export default Categories
