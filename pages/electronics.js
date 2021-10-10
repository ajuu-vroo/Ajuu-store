import ProductFeed from "../components/ProductFeed";

function electronics({productInfo}) {
    return (
        <div className='pt-16'>
            <ProductFeed productInfo={productInfo.filter((product)=>{
                if(product.category === `electronics`){
                    return product
                }
            })}/>
        </div>

    )
}

export default electronics;

export async function getStaticProps(context) {
    const productInfo = await fetch('https://fakestoreapi.com/products').then((data) => data.json());
    // console.log(productInfo)
    return {
      props: { productInfo }
    }
  }
  
