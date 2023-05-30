"use client";
import React from "react";
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import hero1 from "/public/herobg5.jpg";
import hero2 from "/public/herobg2.jpg";
import hero3 from "/public/herobg3.jpg";
const Hero = () => {
  return (
    <div className="w-[100%] h-screen flex justify-center ">
      <Swiper
      modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        // pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="">
            <Image
              className="object-center w-full content-center object-cover h-screen"
              src={hero1}
              alt=""
            />
            <h1 className="text-white md:text-7xl top-48 text-4xl absolute md:top-96 left-10 hover:text-red-500">
              PICK THE PERFECT PAIR
            </h1>
            <p className="absolute md:top-[470px] top-72 left-10 text-white font-medium ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus animi quam
              possimus error, similique repellendus vitae et delect.
            </p>
            <button className="absolute text-white top-96 md:top-[500px] mt-6 left-10 py-2 px-4 border-red-500 border-2 hover:bg-red-500 hover:transition-all hover:duration-200 hover:ease-in">
              Read More
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <Image
              className="object-center w-full content-center object-cover h-screen"
              src={hero2}
              alt=""
            />
            <h1 className="md:text-7xl top-48 text-4xl absolute md:top-96 left-10 text-red-500 font-bold ">
              Exclusive Sports Shoes
            </h1>
            <p className="absolute md:top-[470px] text-red-500 font-bold top-72 left-10 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus animi quam
              possimus error, similique repellendus vitae et delect.
            </p>
            <button className="absolute text-white top-96 md:top-[500px] mt-6 left-10 py-2 px-4 border-red-500 border-2 hover:bg-red-500 hover:transition-all hover:duration-200 hover:ease-in">
              Read More
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="">
            <Image
              className="object-center w-full object-cover content-center h-screen"
              src={hero3}
              alt=""
            />
            <h1 className="md:text-7xl top-48 text-4xl absolute md:top-96 left-16 text-white font-bold ">
              Smart & Sporty
            </h1>
            <p className="absolute md:top-[470px] text-white font-bold top-72 left-16 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus animi quam
              possimus error, similique repellendus vitae et delect.
            </p>
            <button className="absolute text-white top-96 md:top-[500px] mt-6 left-16 py-2 px-4 border-red-500 border-2 hover:bg-red-500 hover:transition-all hover:duration-200 hover:ease-in">
              Read More
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
