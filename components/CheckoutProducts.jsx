function CheckoutProducts({ item }) {
    function cartHandler() {
        let storageProducts = JSON.parse(localStorage.getItem('products'));
        let products = storageProducts.filter(product => product.id !== item.id);
        localStorage.setItem('products', JSON.stringify(products));
    }
    return (
        <div className='mt-3 w-[360px] flex justify-between md:w-[800px]'>

            <div className="shadow-lg rounded-2xl w-64 p-4 bg-white relative overflow-hidden flex-1">
                <img alt="" src={item.image} className="absolute -right-16 md:right-1 h-40 w-40 mb-4 object-contain" />
                <div className="w-4/6">
                    <p className="text-[#472d34] text-lg font-medium mb-2">
                        {item.name}
                    </p>
                    <p className="text-gray-400 text-xs hidden lg:flex">
                        {item.description}
                    </p>
                </div>
            </div>
            <div className='space-y-3 w-28 items-center flex flex-col lg:pl-5'>
                <div className=' bg-white rounded-lg text-center shadow w-28'>
                    <span className='text-sm text-[#392429]'>Price:</span> <span className='font-semibold text-[#392429]'>{"₹"+" " + item.price}</span>
                </div>
                <button className=' bg-[#392429] text-white rounded-lg text-center shadow w-28 outline-none  h-10 focus:outline-none'>
                    Free Delivery.
                </button>
                <button className=' bg-[#392429] rounded-lg text-white text-center shadow w-28 outline-none focus:outline-none h-12' onClick={cartHandler}>
                    Remove from Cart.
                </button>
            </div>


        </div>
    )
}

export default CheckoutProducts
