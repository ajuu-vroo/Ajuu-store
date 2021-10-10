import Products from '../components/Products';

function ProductFeed({productInfo}) {
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
            {
                productInfo.map((product,index)=>{
                    return <Products item={product} key={index} />
                })
            }
        </div>
    )
}

export default ProductFeed
