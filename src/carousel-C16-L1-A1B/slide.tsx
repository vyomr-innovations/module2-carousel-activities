"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SlideData from "@/carousel-C16-L1-A1B/slideData.json";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Swiper as SwiperClass } from "swiper";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";

export default function ImageSlide() {
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
        <h1 className="text-center text-3xl py-4 text-black">Video</h1>
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
              <div className="grid grid-cols-12">
                <div className="col-span-6 h-[400px] relative ">
                  <Image src={item.image1} fill alt="image" />
                </div>
                <div className="col-span-6 flex justify-center items-center">
                  <h4 className="text-black text-2xl text-center">
                    {item.Qustion}
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* dubble image Slide  */}

          <SwiperSlide className="border-2 rounded-lg">
            <div className="grid grid-cols-12 gap-4 ">
              <div className="col-span-6  ">
                <div className="h-[200px] relative flex flex-col">
                  <Image src="/C16/img_3.jpg" fill alt="image" />
                </div>
                <div className="h-[200px] relative flex flex-col">
                  <Image src="/C16/img_4.jpg" fill alt="image" />
                </div>
              </div>
              <div className="col-span-6 flex justify-center items-center">
                <h4 className="text-black text-2xl text-center">
                  Was the duck rude or polite in the end?
                </h4>
              </div>
            </div>
          </SwiperSlide>
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
                lastSlide < SlideData.length
                  ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                  : ""
              } hover:scale-90 
               `}
            >
              <FaArrowRight
                className={`${
                  lastSlide < SlideData.length ? "block" : "hidden"
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
