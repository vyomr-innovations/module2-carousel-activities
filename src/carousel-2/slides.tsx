"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import SlideData from "@/lib/craousel-2-data/slideData.json";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Swiper as SwiperClass } from "swiper";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

type SlideProps = {
  setIsFirstScreen: (value: string) => void;
};
export default function SlideStartSec({ setIsFirstScreen }: SlideProps) {
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
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="w-[400px] ">
        <Swiper
          slidesPerView={1}
          loop={true}
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
              <div className="relative flex justify-center items-center  shadow-md shadow-black overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  className="rounded-lg"
                  height={200}
                  width={500}
                  alt="slider image"
                />
                <h1 className="absolute bg-[#000000b1] w-full p-4 text-center z-10 rounded-lg  bottom-0">
                  {item.text}
                </h1>
              </div>
            </SwiperSlide>
          ))}
          <div className=" py-4 flex items-center justify-around  text-black">
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
        </Swiper>
      </div>
    </div>
  );
}
