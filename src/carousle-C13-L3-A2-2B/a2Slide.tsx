"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SlideData from "@/carousle-C13-L3-A2-2B/slideData.json";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Swiper as SwiperClass } from "swiper";
import EmotionBar from "./emotionBar";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

type SlideProps = {
  setIsFirstScreen: (value: string) => void;
};
export default function C13L1A2Slide({ setIsFirstScreen }: SlideProps) {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);

  const handleNext = () => {
    if (lastSlide == SlideData.length - 1) {
      setIsFirstScreen("emotionImage");
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
      <div className="w-[900px] px-2">
        <h1 className="text-center text-3xl py-4 text-black">
          Lets review emotions!
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
            <SwiperSlide key={index}>
              <div className="grid grid-cols-12 gap-[50px]">
                <div className="col-span-8 relative w-[600px] h-[400px] flex justify-center items-center  shadow-md  overflow-hidden rounded-lg">
                  <Image
                    src={item.img}
                    className="rounded-lg object-cover"
                    fill
                    alt="slider image"
                  />
                  <h1
                    className={`absolute  text-white
                      bg-[#000000e5] w-full p-4 text-center z-10 rounded-lg  top-0`}
                  >
                    {item.text}
                  </h1>
                </div>
                <div className="col-span-4 w-full">
                  <EmotionBar item={item.answer} />
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className=" py-4 flex items-center justify-around  text-black">
            <div
              className={` ${lastSlide > 0 ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400":"" } hover:scale-90 
               `}
            >
              <FaArrowLeft
                className={`${lastSlide > 0 ? "block" :"hidden"} text-[40px]  cursor-pointer `}
                onClick={handlePerv}
              />
            </div>
            <div
              className={`border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] hover:scale-90 bg-yellow-400
              `}
            >
              <FaArrowRight
                className="text-[40px] cursor-pointer "
                onClick={handleNext}
              />
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
