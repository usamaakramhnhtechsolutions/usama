import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import profile from '../../../assest/profile.jpg'
import "swiper/css";
import "../home.css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";

const Slider = () => {
  return (
  <section className=''>
      <div className="mainSlidercss">
      <Swiper
        slidesPerView={2}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          375: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          425: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <div
            className="shadow-2xl border-r-slate-300" id="sliderbox"
          >
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec
            sollicitudin molestie malesuada. Donec sollicitudin molestie
            malesuada. Pellentesque in ipsum id orci porta dapibus. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum
            id orci porta dapibus. Quisque velit nisi, pretium ut lacinia in,
            elementum id enim.
            <div className="flex justify-center mt-6">
                <img src={profile} alt="profile" />
            </div>
            <div className="my-2 text-center sliderperagraph">Abraham Linkon , Themefisher.com</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="shadow-2xl" id="sliderbox"
          >
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec
            sollicitudin molestie malesuada. Donec sollicitudin molestie
            malesuada. Pellentesque in ipsum id orci porta dapibus. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum
            id orci porta dapibus. Quisque velit nisi, pretium ut lacinia in,
            elementum id enim.
            <div className="flex justify-center mt-6">
                <img src={profile} alt="profile" />
            </div>
            <div className="my-2 text-center sliderperagraph">Abraham Linkon , Themefisher.com</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="shadow-2xl" id="sliderbox"
          >
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec
            sollicitudin molestie malesuada. Donec sollicitudin molestie
            malesuada. Pellentesque in ipsum id orci porta dapibus. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum
            id orci porta dapibus. Quisque velit nisi, pretium ut lacinia in,
            elementum id enim.
            <div className="flex justify-center mt-6">
                <img src={profile} alt="profile" />
            </div>
            <div className="my-2 text-center sliderperagraph">Abraham Linkon , Themefisher.com</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="shadow-2xl" id="sliderbox"
          >
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec
            sollicitudin molestie malesuada. Donec sollicitudin molestie
            malesuada. Pellentesque in ipsum id orci porta dapibus. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum
            id orci porta dapibus. Quisque velit nisi, pretium ut lacinia in,
            elementum id enim.
            <div className="flex justify-center mt-6">
                <img src={profile} alt="profile" />
            </div>
            <div className="my-2 text-center sliderperagraph">Abraham Linkon , Themefisher.com</div>
          </div>
        </SwiperSlide>
       
      </Swiper>
    </div>
  </section>
  )
}

export default Slider