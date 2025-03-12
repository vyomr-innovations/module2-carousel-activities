"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SlideData from "@/carousel-C16-L1-A5/slideData.json";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Swiper as SwiperClass } from "swiper";

// type SlideProps = {
//   setIsFirstScreen: (value: string) => void;
// };
export default function SlideStart() {
  const swiperRef = useRef<  SwiperClass | null >(null);
  const [lastSlide, setLastSlide] = useState<number>(0);
  const [thumbsDownChek, setThumbsDownChek] = useState(false);
  const [thumbsDownWrong, setThumbsDownWrong] = useState(false);

  const [thumbsupChek, setThumbsupChek] = useState(false);
  const [thumbsupWrong, setThumbsupWrong] = useState(false);

  const [wrongAudio, setWrongAudio] = useState<HTMLAudioElement | null>(null);
  const [correctAudio, setCorrectAudio] = useState<HTMLAudioElement | null>(null);


  useEffect(() => {
    setWrongAudio(new Audio("/sound/wrong_buzzer.mp3"));
    setCorrectAudio(new Audio("/sound/correct.mp3"));
  }, []);

  const HandleYes = (val: string) => {
    if (SlideData[lastSlide]?.value === val) {
      setThumbsupChek(true);
      setTimeout(() => {
        swiperRef.current?.slideNext();
        setThumbsupChek(false); // Reset color after slide change
      }, 1000);
      correctAudio?.play()
    } else {
        setThumbsupWrong(true)
        setTimeout(()=>{
            setThumbsupWrong(false);
        },800)
        wrongAudio?.play();
    //   setThumbsupWrong(false); 
    }
  };

  const handleNo = (val: string) => {
    if (SlideData[lastSlide]?.value === val) {
      setThumbsDownChek(true);
      setTimeout(() => {
        swiperRef.current?.slideNext();
        setThumbsDownChek(false); 
      }, 1000);
      correctAudio?.play()
    } else {
        setThumbsDownWrong(true)
      setTimeout(() => {
        setThumbsDownWrong(false);
      },800);
      wrongAudio?.play();

    }
  };

  const handleChange = (swipe: SwiperClass) => {
    setLastSlide(swipe.activeIndex);
    if (lastSlide == SlideData.length - 1) return
      //  setIsFirstScreen("result");
  };
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="w-[600px] ">
        <h1 className="text-center text-3xl py-4 text-black">
        Polite or Not? </h1>
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
                 <div className="relative w-full h-[400px] flex justify-center items-center  shadow-md shadow-black overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  className="rounded-lg object-cover"
                fill
                  alt="slider image"
                />
                <h1 className="absolute bg-[#000000cc] text-white text-xl w-full p-4 text-center z-10 rounded-lg  bottom-0">
                  {item.text}
                </h1>
              </div>
            </SwiperSlide>
          ))}
          <div className=" py-4 flex items-center justify-around  text-black">
            <div
               className={`border border-black rounded-full p-3 w-[60px] h-[60px] flex items-center justify-center  shadow shadow-[#000000b9] hover:scale-90
                ${thumbsDownChek ? "bg-green-600" : ""}
                ${thumbsDownWrong ? "bg-red-600" : ""}
                ${!thumbsDownChek && !thumbsDownWrong ? "bg-yellow-400" : ""}`}
            >
              <h3   className="text-lg font-bold  cursor-pointer "
                onClick={() => handleNo("Thumbs down")}>No</h3>
            </div>
            <div
              className={`border border-black rounded-full p-3 w-[60px] h-[60px] flex items-center justify-center shadow shadow-[#000000b9] hover:scale-90 ${
                thumbsupChek ? "bg-green-400 " : ""
              } ${thumbsupWrong ? "bg-red-600" : ""}
              ${!thumbsupChek && !thumbsupWrong ? "bg-yellow-400" : "" }
              `}
            >
              <h3
                className="text-lg font-bold cursor-pointer  "
                onClick={() => HandleYes("Thumbs up")}
              >Yes </h3>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
