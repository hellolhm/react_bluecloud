import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css'



const Cuswiper = () => {
    return (
        <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        speed={3000}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src='img/main01.png' className='img-fluid'/></SwiperSlide>
        <SwiperSlide><img src='img/main02.png' className='img-fluid'/></SwiperSlide>
      </Swiper>
    );
    };
    export default Cuswiper;