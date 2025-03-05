"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SlideData from "@/carousel-C16-L3-AA/slideData.json";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Swiper as SwiperClass } from "swiper";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";

export default function SlideC15() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);

  const handleNext = () => {
    if (lastSlide == SlideData.length - 1) {
      //   setIsFirstScreen("emotionImage");
    }
    swiperRef.current?.slideNext();
  };

  const handlePerv = () => {
    if (lastSlide == 0) return;
    swiperRef.current?.slidePrev();
  };

  const handleChange = (swipe: SwiperClass) => {
    setLastSlide(swipe.activeIndex);
  };
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="w-[950px] px-2">
        <h1 className="text-center text-3xl py-4 text-black">
        Cooperative Communities
        </h1>
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
            <SwiperSlide key={index} className="border-2 rounded-lg">
              <div className="grid grid-cols-12 gap-3 px-1">
                <div className="col-span-6 h-[400px]  relative ">
                  <Image
                    src={item.image}
                    fill
                    alt="slide image"
                    className="object-contain object-center"
                  />
                </div>
                <div className="col-span-6 flex justify-center items-center flex-col gap-4">
                  <h3 className="text-black font-bold text-2xl text-center">
                    {item.text}
                  </h3>
                  <h3 className="text-black text-2xl text-center">{item.text2}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className=" py-4 flex items-center justify-around  text-black">
            <div
              className={` ${
                lastSlide > 0
                  ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                  : ""
              } hover:scale-90 
               `}
            >
              <FaArrowLeft
                className={`${
                  lastSlide > 0 ? "block" : "hidden"
                } text-[40px]  cursor-pointer `}
                onClick={handlePerv}
              />
            </div>
            <div
              className={` ${
                lastSlide < SlideData.length -1
                  ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                  : ""
              } hover:scale-90 
               `}
            >
              <FaArrowRight
                className={`${
                  lastSlide < SlideData.length -1  ? "block" : "hidden"
                } text-[40px]  cursor-pointer `}
                onClick={handleNext}
              />
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
