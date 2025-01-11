import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../index.css'

import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'
import SectionTitle from '../../SharedComp/SectionTitle';

const Category = () => {
    return (
        <section className="mx-[5%] lg:mx-[10%]">
            <div>
                <SectionTitle heading='ORDER ONLINE' subHeading='---From 11:00am to 10:00pm---' />
            </div>
            <div className='lg:mx-72 mx-[20%]'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={0}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1536: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[FreeMode, Pagination, Autoplay]}
                    className='mySwiper'
                >
                    <SwiperSlide>
                        <img src={slide1} alt="Slide 1" />
                        <p className='category-text'>Salads</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide2} alt="Slide 2" />
                        <p className='category-text'>Pizza</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} alt="Slide 3" />
                        <p className='category-text'>Coffee</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide4} alt="Slide 4" />
                        <p className='category-text'>Cake</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide5} alt="Slide 5" />
                        <p className='category-text'>Vegetables</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} alt="Slide 6" />
                        <p className='category-text'>White Tea</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide2} alt="Slide 7" />
                        <p className='category-text'>Pizza</p>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};


export default Category;