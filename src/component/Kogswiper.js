import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css'


const Kogswiper = () => {
    return (
        <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        speed={2000}
        modules={[Autoplay, Pagination, Navigation]}
        className="kogsSwiper"
      >
        <SwiperSlide><img src='img/kog01.png' className='img-fluid w-100'/></SwiperSlide>
        <SwiperSlide><img src='img/kog02.png' className='img-fluid w-100'/></SwiperSlide>
      </Swiper>
    );
};

export default Kogswiper;