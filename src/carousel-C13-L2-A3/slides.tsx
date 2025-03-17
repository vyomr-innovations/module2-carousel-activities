"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SlideData from "@/carousel-C13-L2-A3/slideData.json";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Swiper as SwiperClass } from "swiper";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

// type SlideProps = {
//   setIsFirstScreen: (value: string) => void;
// };
export default function SlideStartSec() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);

  const handleNext = () => {
    swiperRef.current?.slideNext();
    if (lastSlide == SlideData.length - 1) {
      // setIsFirstScreen("result");
      return
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
    <div className="bg-white min-h-screen flex items-center justify-center">
      <Swiper
          slidesPerView={1}
          loop={false}
          autoplay={false}
          allowTouchMove={false}
          modules={[Navigation]}
          onSlideChange={handleChange}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {SlideData.map((item, index) => (
            <SwiperSlide key={index}>
              <h1 className="text-center text-3xl py-4 text-black">
                {item.title}
              </h1>
              <div className="grid grid-cols-12 w-[900px] mx-auto border border-black rounded-lg ">
                <div className="col-span-6 relative w-full h-[400px]  flex justify-center items-center   overflow-hidden rounded-lg"> 
                <Image
                  src={item.image}
                  className="rounded-lg object-cover"
                 fill
                  alt="slider image"
                />
              </div>
                <div className="col-span-6  w-full flex items-center justify-center">
                <p className=" w-full text-black p-4 text-2xl text-center rounded-lg">
                  {item.text}
                </p>
                </div>

              </div>
             
            </SwiperSlide>
          ))}
          <div className=" py-4 flex items-center justify-around  text-black">
            <div
              className={`${lastSlide > 0 ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400" :""} hover:scale-90 `}
            >
              <FaArrowLeft
                className={`${lastSlide > 0 ? "block" : "hidden"} text-[40px]  cursor-pointer `}
                onClick={handlePrv}
              />
            </div>
            <div
              className={`${lastSlide < SlideData.length -1  ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400" :""} hover:scale-90 `}
              >
              <FaArrowRight
                className={`${lastSlide < SlideData.length -1 ? "block":"hidden"} text-[40px]  cursor-pointer `}
                onClick={handleNext}
              />
            </div>
          </div>
        </Swiper>
    </div>
  );
}
