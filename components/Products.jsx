import { useState,useEffect } from "react";
// import { useRouter } from "next/router";

function Products({ item }) {
    const[clicked,setClicked] = useState(false);

    function itemHandler() {
        let products = [];
        if (localStorage.getItem('products')) {
            products = JSON.parse(localStorage.getItem('products'));
        }
        products.push({
            id: Math.random(),
            name: item.title,
            image: item.image,
            price: Math.round(item.price * 70),
            description : item.description
        });
        localStorage.setItem('products', JSON.stringify(products))
        // console.log(JSON.parse(localStorage.getItem('products')));
        if(products.some(e => e.name === item.title)){
            setClicked(true)
        }
    }
    useEffect(() => {
        let products = [];
        if (localStorage.getItem('products')) {
            products = JSON.parse(localStorage.getItem('products'));
        }
        if(products.some(e => e.name === item.title)){
            setClicked(true)
        }
    }, [clicked])
    return (
        <div className='flex flex-col items-center overflow-hidden mt-4 relative max-h-[425px] bg-gray-50 rounded' >
            <h1 className='absolute top-1 right-5 text-gray-600 text-sm opacity-60'>{item.category}</h1>
            <div className='overflow-hidden'>
                <img src={item.image} alt="" className='h-56 w-56 object-contain' />
            </div>
            <div className=' w-80 '>
                <h1 className='text-[#392429] font-semibold text-xl underline text-center'>{item.title}</h1>
                <h1 className='font-medium mt-1 text-center text-gray-600'>{item.description.substr(0, 80) + "..."}</h1>
            </div>
            <div className='mt-2'>
                <h1 className='text-xl flex justify-center'>⭐⭐⭐⭐</h1>
                <h1 className='text-xl text-[#392429] font-bold mt-2'><span className='text-lg px-1 font-mono'>₹</span>{Math.round(item.price * 70) + "/-"}</h1>
                {clicked ? (<button className='text-[#392429] rounded-md border-2 border-[#392429] bg-white w-80 h-10 mt-3'>Item added to cart
                </button>) :
                (<button className='bg-[#392429] rounded text-white w-80 h-10 mt-3 hover:bg-[#40111b] transition duration-200' onClick={itemHandler}>Add To Basket
                </button>)
}
            </div>

        </div>
    )
}

export default Products
