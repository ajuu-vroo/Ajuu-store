import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image'


function Banner() {
    return (
        <div className='relative'>
            <Carousel
                autoPlay
                showArrows={false}
                showStatus={false}
                showThumbs={false}
                showIndicators={false}
                infiniteLoop
                interval={5000}
                
            >
                <div>
                    <Image src="/1.jpeg" alt="" height={405} width={1400} quality={100}/>
                </div>
                <div>
                    <Image src="/2.jpeg" alt="" height={405} width={1400} quality={100}/>
                </div>
                <div>
                    <Image src="/3.jpeg" alt="" height={405} width={1400} quality={100}/>
                </div>
                <div>
                    <Image src="/4.jpeg" alt="" height={405} width={1400} quality={100}/>
                </div>
            </Carousel>

        </div>
    )
}

export default Banner
