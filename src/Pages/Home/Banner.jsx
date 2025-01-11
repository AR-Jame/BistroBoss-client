import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img1 from '../../assets/home/01.jpg'
import img2 from '../../assets/home/02.jpg'
import img3 from '../../assets/home/03.png'
import img4 from '../../assets/home/04.jpg'
import img5 from '../../assets/home/05.png'
import img6 from '../../assets/home/06.png'

const Banner = () => {
    return (
        <section className=''>
            <Carousel autoPlay={true} interval={3000} infiniteLoop={true} showStatus={false} showThumbs={false}>
                <div>
                    <img src={img1} className='lg:h-[100vh] h-full'/>
                </div>
                <div>
                    <img src={img2} className='lg:h-[100vh] h-full'/>
                </div>
                <div>
                    <img src={img3} className='lg:h-[100vh] h-full'/>
                </div>
                <div>
                    <img src={img4} className='lg:h-[100vh] h-full'/>
                </div>
                <div>
                    <img src={img5} className='lg:h-[100vh] h-full'/>
                </div>
                <div>
                    <img src={img6} className='lg:h-[100vh] h-full'/>
                </div>
            </Carousel>
        </section>
    );
};

export default Banner;