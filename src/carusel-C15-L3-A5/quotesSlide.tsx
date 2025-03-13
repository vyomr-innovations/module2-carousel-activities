"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SlideData from "@/carusel-C15-L3-A5/slideData.json";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Swiper as SwiperClass } from "swiper";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";

export default function SlideC15L3A5() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);
  const [blur,setBlur]=useState(false)

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
    setBlur(false)
  };
  const handleBlur =()=>{
    setBlur(true)
  }
  return (
    <div className="bg-white w-full  flex  items-start justify-center p-5">
      <div className="w-[800px] px-2">
        <h1 className="text-center text-3xl pb-10 pt-3 text-black">
        Quotes
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
            <SwiperSlide key={index}  >
                <h3 className="text-black text-2xl text-center">{item.text}</h3>
                <div className="col-span-6 h-[300px]  relative border border-black  ">
                  <Image
                    src={item.image}
                    fill
                    alt="slide image"
                    className="object-contain object-center"
                  />
                  <div className={`${blur ? "backdrop-blur-none" :"backdrop-blur-lg "} w-full h-full absolute top-0 left-0 flex justify-center items-center `}>
                    <button onClick={handleBlur} className={` ${blur ? "hidden":"block"} bg-[#000000cc] px-8 py-2 rounded-lg `}>Do you know who said it?</button>
                  </div>
                </div>
                <h3 className={`${blur ? "block":"hidden"} text-black text-2xl text-center`}>How does it reflect determination?</h3>


                <div className="pt-8 flex items-center justify-around  text-black">
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
            </SwiperSlide>
            
          ))}
         
        </Swiper>
      </div>
    </div>
  );
}
