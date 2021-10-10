function PhoneMenu() {
    return (
        <div className='flex flex-col sm:hidden'>
            <h1 className='text-[#392429] font-medium text-2xl text-center'>Shop By Category</h1>
            <div className='grid grid-cols-3 gap-8 px-6 mt-4 ml-3'>
            <a href="clothing-mens">
                <div>
                <div className='border-4 border-[#392429] rounded-full overflow-hidden h-16 w-16'>
                    <img src="menuPic1.png" alt="" className=' h-16 w-16'/>
                </div>
                <h1 className='text-[#392429] font-bold'>Men's Clothing</h1>
                </div></a>
                <a href="clothing-womens">
                <div>
                <div className='border-4 border-[#392429] rounded-full overflow-hidden h-16 w-16'>
                    <img src="menuPic2.jpg" alt="" className=' h-16 w-16' />
                </div>
                <h1 className='text-[#392429] font-bold'>Women's Clothing</h1>
                </div>
                </a>
                <a href="beauty">
                <div>
                <div className='border-4 border-[#392429] rounded-full overflow-hidden h-16 w-16'>
                    <img src="menuPic3.jpg" alt="" className=' h-16 w-16' />
                </div>
                <h1 className='text-[#392429] font-bold'>Beauty and Care</h1>
                </div>
                </a>
                <a href="electronics">
                <div>
                <div className='border-4 border-[#392429] rounded-full overflow-hidden h-16 w-16'>
                    <img src="menuPic4.webp" alt="" className=' h-16 w-16' />
                </div>
                <h1 className='text-[#392429] font-bold'>Electronics</h1>
                </div>
                </a>
                <a href="jewellery">
                <div>
                <div className='border-4 border-[#392429] rounded-full overflow-hidden h-16 w-16'>
                    <img src="menuPic5.webp" alt="" className=' h-16 w-16' />
                </div>
                <h1 className='text-[#392429] font-bold'>Jewellery</h1>
                </div>
                </a>
                <div>
                <div className='border-4 border-[#392429] rounded-full overflow-hidden h-16 w-16' >
                    <img src="menuPic6.png" alt="" className=' h-16 w-16 object-center' />
                </div>
                <h1 className='text-[#392429] font-bold text-center' >More ...</h1>
                </div>

            </div>
        </div>
    )
}

export default PhoneMenu
