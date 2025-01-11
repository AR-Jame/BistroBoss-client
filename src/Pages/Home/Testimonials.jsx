import SectionTitle from "../../SharedComp/SectionTitle";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonials = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])
    return (
        <section className="mx-[5%] lg:mx-[10%]">
            <SectionTitle heading='TESTIMONIALS' subHeading='---What Our Clients Say---' />
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {reviews?.map(review =>
                        <SwiperSlide key={review._id}>
                            <div className="lg:mx-20 mx-10 text-center flex flex-col items-center">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <FaQuoteLeft className="text-7xl my-7"/>
                                <p>{review.details}</p>
                                <p className="text-4xl text-[#CD9003] mt-4">{review.name}</p>
                            </div>
                        </SwiperSlide>)}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;