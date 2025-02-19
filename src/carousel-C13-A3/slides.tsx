"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SlideData from "@/lib/carousel-C13-A3/slideData.json";
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
              <div className="grid grid-cols-12 w-[800px] mx-auto border border-black rounded-lg ">
                <div className="col-span-6"> 
                  <div className="relative flex justify-center items-center   overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  className="rounded-lg"
                  height={200}
                  width={400}
                  alt="slider image"
                />
                
              </div>
              </div>
                <div className="col-span-6 flex items-center justify-center">
                <p className=" w-full text-black p-4 text-3xl text-center rounded-lg">
                  {item.text}
                </p>
                </div>

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
  );
}
