import { Navigation, Pagination,Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css'



const Cuswiper = () => {
    return (
        <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        loopedSlides={1}
        speed={3000}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg bg1"></div>
          {/* <img src='img/main01.jpg' className='img-fluid'/> */}
        </SwiperSlide>
        <SwiperSlide>
        <div className="bg bg2"></div>
          {/* <img src='img/main03.jpg' className='img-fluid'/> */}
        </SwiperSlide>
        <SwiperSlide>
        <div className="bg bg3"></div>
          {/* <img src='img/main04.jpg' className='img-fluid'/> */}
        </SwiperSlide>
        <SwiperSlide>
        <div className="bg bg4"></div>
          {/* <img src='img/main02.jpg' className='img-fluid'/> */}
        </SwiperSlide>
      </Swiper>
    );
    };
    export default Cuswiper;