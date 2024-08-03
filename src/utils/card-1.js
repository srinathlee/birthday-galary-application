
import img1 from "../components/assets/img-1.jpg"
import img2 from "../components/assets/img-2.jpg"
import img3 from "../components/assets/img-3.jpg"
import img4 from "../components/assets/img-4.jpg"
import img5 from "../components/assets/img-5.jpg"
import img6 from "../components/assets/img-6.jpg"
import img7 from "../components/assets/img-7.jpg"
import img8 from "../components/assets/img-9.jpg"
import img9 from "../components/assets/img-10.jpg"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';


// import required modules
import { EffectCards } from 'swiper/modules';

const Card1=()=> {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper w-40 rounded-md"
      >
        <SwiperSlide className="w-60 h-80 rounded-lg" ><img className="w-40 h-60" src={img1}/></SwiperSlide>
        <SwiperSlide className="w-60 h-80 rounded-lg" ><img className="w-40 h-60" src={img2}/></SwiperSlide>
        <SwiperSlide className="w-60 h-80 rounded-lg" ><img   className="w-40 h-60"src={img3}/></SwiperSlide>
        <SwiperSlide className="w-60 h-80 rounded-lg" ><img  className="w-40 h-60" src={img4}/></SwiperSlide>
        <SwiperSlide className="w-60 h-80 rounded-lg" ><img  className="w-40 h-60"src={img5}/></SwiperSlide>
        <SwiperSlide className="w-60 h-80 rounded-lg" ><img className="w-40 h-60" src={img6}/></SwiperSlide>
        <SwiperSlide className="w-60 h-80 rounded-lg" ><img className="w-40 h-60" src={img7}/></SwiperSlide>
        <SwiperSlide className="w-60 h-80 rounded-lg" ><img className="w-40 h-60" src={img8}/></SwiperSlide>
        <SwiperSlide className="w-60 h-80 rounded-lg" ><img  className="w-40 h-60" src={img9}/></SwiperSlide>

      </Swiper>
    </>
  );
}

export default Card1