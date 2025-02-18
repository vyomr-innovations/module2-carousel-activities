"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import SlideData from "@/lib/carousel-3-data/SlideData.json";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Swiper as SwiperClass } from "swiper";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

type SlideProps = {
  setIsFirstScreen: (value: string) => void;
};
const ColorSlide = ({ setIsFirstScreen }: SlideProps) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);

  const handleNext = () => {
    swiperRef.current?.slideNext();
    if (lastSlide == SlideData.length - 1) {
      setIsFirstScreen("result");
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
    <div className="min-h-screen relative flex justify-center items-center">
      <h1 className="absolute top-1 z-10 text-center text-2xl font-bold text-black ">RULER</h1>
      <Swiper
      className="h-full flex justify-center items-center"
        slidesPerView={1}
        loop={true}
        autoplay={false}
        allowTouchMove={false}
        modules={[Navigation]}
        onSlideChange={handleChange}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {SlideData.map((item, index) => (
          <SwiperSlide key={index}   style={{backgroundColor:`${item.color}`}}>
            <div className=" min-h-screen text-black flex justify-center items-center">
            <h1 className="text-[65px]">{item.text}</h1>
            </div>

         
          </SwiperSlide>
        ))}
        {/* swipe buttons   */}
        
      </Swiper>
      <div className=" absolute z-10 bottom-0 py-4 flex items-center justify-around  text-black w-full">
        <div
          className={`border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] hover:scale-90 bg-yellow-400`}
        >
          <FaArrowLeft
            className="text-[40px]  cursor-pointer "
            onClick={handlePrv}
          />
        </div>
        <div
          className={`border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] hover:scale-90 bg-yellow-400`}
        >
          <FaArrowRight
            className="text-[40px]  cursor-pointer "
            onClick={handleNext}
          />
        </div>
      </div>
    </div>
  );
};

export default ColorSlide;
