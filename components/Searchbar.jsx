import Categories from "./Categories"
import { useState } from "react"

function Searchbar() {
    const [state, setstate] = useState(false)
    const[clicked,setClick] =useState(false)
    function showCategory(){
        setstate(true);
    }
    function clickCategory(){
        setClick(!clicked);
        setstate(true);
    }
    function clickCapturer(){
        if(clicked) return;
        else{
        setstate(false);}

    }
    return (
        <div className='hidden sm:flex bg-white rounded-full border border-[#6f2232] text-[#6f2232] flex-1 mt-1 ' >
            <div className='flex flex-col'>
            <div className='text-[#6f2232]  mt-[5px] pl-1 pr-3 rounded-l-full border-r-2  border-[#6f2232] cursor-pointer'
            onMouseEnter={showCategory} onMouseLeave={clickCapturer} onClick={clickCategory} >
            <h1 className='active:underline font-bold pt-[2px]'>Category</h1>
            
            </div>
            <div className='absolute top-16 w-48 h-48 z-30' onMouseLeave={()=>{setstate(false);
            setClick(false)}}>
                {state && <Categories/>}
            </div>
            </div>
            <input type="search" className=' pl-2 outline-none flex-1 font-overlook' placeholder='Search for products, brands and more.'/>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-[#6f2232] cursor-pointer rounded-full mt-[0.5px] transform hover:scale-105 transition duration-300" fill="none" 
            viewBox="0 0 24 24" stroke="currentColor" > 
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
    )
}

export default Searchbar
