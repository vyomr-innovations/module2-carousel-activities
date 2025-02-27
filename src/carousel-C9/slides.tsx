"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import SlideData from "@/lib/craousel-2-data/slideData.json";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Swiper as SwiperClass } from "swiper";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";


export default function SlideStartSec() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);

  const handleNext = () => {
    swiperRef.current?.slideNext();
    if (lastSlide == SlideData.length - 1) {
      // setIsFirstScreen("result");
    }
  };

  const handlePrv = () => {
    if (swiperRef.current && swiperRef.current.activeIndex > 0) {
      swiperRef.current.slidePrev();
    }
  };

  const handleChange = (swipe: SwiperClass) => {
    setLastSlide(swipe.activeIndex);
    
  };

  return (
    <div className="bg-white min-h-screen overflow-y-scroll flex flex-col items-center justify-start">
    <div className="w-[600px] h-[450px] pt-2"
    >
        <h1 className="text-center text-3xl py-4 text-black">
                {SlideData[lastSlide].title} </h1>
    <Swiper
    className="w-full h-full"
          slidesPerView={1}
          loop={false}
          autoplay={false}
          allowTouchMove={false}
          modules={[Navigation]}
          onSlideChange={handleChange}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {SlideData.map((item, index) => (
            <SwiperSlide key={index} className=" relative w-full h-full bg-cover bg-no-repeat bg-center "
            style={{ backgroundImage: `url(${item.image})`}}>
                <h1 className="absolute bg-[#000000d4] w-full p-4 text-center z-10 rounded-lg  bottom-0">
                  {item.text}
                </h1>
            </SwiperSlide>
          ))}
        
        </Swiper>
        <div className="py-4 flex items-center justify-between gap-10 w-full text-black">

            <div
              className={`${lastSlide > 0 ? "border border-black bg-yellow-400  shadow-inner shadow-[#000000b9]":""}  rounded-full p-3 hover:scale-90 `}
            >
              <FaArrowLeft
                className={`${lastSlide > 0 ? "block":"hidden"} text-[40px]  cursor-pointer` }
                onClick={handlePrv}
              />
            </div>


            <div
              className={`${lastSlide < SlideData.length -1  ? "border border-black bg-yellow-400  shadow-inner shadow-[#000000b9]":""} rounded-full p-3  hover:scale-90 `}
            >
              <FaArrowRight
                className={`${lastSlide <SlideData.length - 1 ? "block":"hidden"} text-[40px]  cursor-pointer `}
                onClick={handleNext}
              />
            </div>
          </div>
    </div>
        
      </div>
  );
}
