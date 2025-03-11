"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SlideData from "@/carousel-C16-L1-A4/slideData.json";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Swiper as SwiperClass } from "swiper";
import optionData from "@/carousel-C16-L1-A4/optionData.json";
import BRAVOModle from "@/components/brovomodle";
import KeepTryingModel from "@/components/KeepTryingModel";

// type SlideProps = {
//   setIsFirstScreen: (value: string) => void;
// };
export default function SlideStart() {
  const [open, setOpen] = useState(false);
  const [rightAnswer, setRightAnswer] = useState(true);

  
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);

  const [wrongAudio, setWrongAudio] = useState<HTMLAudioElement | null>(null);
  const [correctAudio, setCorrectAudio] = useState<HTMLAudioElement | null>(
    null
  );

  useEffect(() => {
    setWrongAudio(new Audio("/sound/wrong_buzzer.mp3"));
    setCorrectAudio(new Audio("/sound/correct.mp3"));
  }, []);

  const HandleChek = (val: string) => {
    if (val === SlideData[lastSlide].value) {
      correctAudio?.play();
      setOpen(true);
      setRightAnswer(true);
      setTimeout(()=>{
        setOpen(false);
        swiperRef.current?.slideNext()
      },2000)
    } else {
      setOpen(true);
      setRightAnswer(false);
      wrongAudio?.play();
    }
  };
  const handleChange = (swipe: SwiperClass) => {
    setLastSlide(swipe.activeIndex);
    if (lastSlide == SlideData.length - 1) return;
    //  setIsFirstScreen("result");
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="w-[600px] ">
        <h1 className="text-center text-3xl py-4 text-black">
          What Do You Do?
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
              <div className="relative w-full h-[400px] flex justify-center items-center  shadow-md shadow-black overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  className="rounded-lg object-cover"
                  fill
                  alt="slider image"
                />
                <h1 className="absolute  bg-[#000000da] w-full p-4 text-center z-10 rounded-lg  bottom-0 text-white">
                  {item.text}
                </h1>
              </div>
            </SwiperSlide>
          ))}
          <div className=" py-4 flex items-center justify-around text-center  text-black gap-7">
            <div
              className={`border  border-black rounded-full p-3 w-full h-[60px] flex items-center justify-center  shadow shadow-[#000000b9] 
                bg-yellow-400 `}
            >
              <h3
                className="text-lg font-bold  cursor-pointer "
                onClick={() => HandleChek(optionData[lastSlide].option1)}
              >
                {optionData[lastSlide].option1}
              </h3>
            </div>
            <div
              className={`border border-black rounded-full p-3 w-full h-[60px] flex items-center justify-center  shadow shadow-[#000000b9] 
                              bg-yellow-400  `}
            >
              <h3
                className="text-lg font-bold cursor-pointer  "
                onClick={() => HandleChek(optionData[lastSlide].option2)}
              >
                {optionData[lastSlide].option2}{" "}
              </h3>
            </div>
          </div>
        </Swiper>
      </div>
      {rightAnswer ? (
        <BRAVOModle open={open} setOpen={setOpen} src={"/C16/correctBrovo_img.jpg"} />
      ) : (
        <KeepTryingModel open={open} setOpen={setOpen} />
      )}
    </div>
  );
}
