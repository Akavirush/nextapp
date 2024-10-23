'use client';

import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

export const MainSwiper = () => {
    return (
        <div className="card-wrapper">
                <Swiper
                    modules={[Navigation]}
                    navigation={true}
                    className="mySwiper"
                    spaceBetween={10}
                    slidesPerView={3}
                    loop={true}
                    breakpoints= {{
                    340: { slidesPerView: 1 },
                    576: { slidesPerView: 2 },
                    992: { slidesPerView: 3 },
                    }}
                >
                    <SwiperSlide><Link href='/'><img src='/image/announce-pic-1.jpg' className='card-image'></img></Link></SwiperSlide>
                    <SwiperSlide><Link href='/'><img src='/image/announce-pic-2.jpg' className='card-image'></img></Link></SwiperSlide>
                    <SwiperSlide><Link href='/'><img src='/image/announce-pic-3.jpg' className='card-image'></img></Link></SwiperSlide>
                    <SwiperSlide><Link href='/'><img src='/image/announce-pic-4.jpg' className='card-image'></img></Link></SwiperSlide>
                    <SwiperSlide><Link href='/'><img src='/image/announce-pic-5.jpg' className='card-image'></img></Link></SwiperSlide>
                    <SwiperSlide><Link href='/'><img src='/image/announce-pic-6.jpg' className='card-image'></img></Link></SwiperSlide>
                </Swiper>
        </div>
    )
}