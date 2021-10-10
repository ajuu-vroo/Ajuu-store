import ProductFeed from "../components/ProductFeed";

function categoryMens({productInfo}) {
    return (
        <div className='pt-16'>
            <ProductFeed productInfo={productInfo.filter((product)=>{
                if(product.category === `men's clothing`){
                    return product
                }
            })}/>
        </div>

    )
}

export default categoryMens;

export async function getStaticProps(context) {
    const productInfo = await fetch('https://fakestoreapi.com/products').then((data) => data.json());
    // console.log(productInfo)
    return {
      props: { productInfo }
    }
  }
  
