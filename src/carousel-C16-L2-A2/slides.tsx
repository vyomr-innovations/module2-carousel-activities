"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SlideData from "@/carousel-C16-L2-A2/slideData.json";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Swiper as SwiperClass } from "swiper";
import optionData from "@/carousel-C16-L2-A2/optionData.json";
import BRAVOModle from "@/components/brovomodle";
import KeepTryingModel from "@/components/KeepTryingModel";

// type SlideProps = {
//   setIsFirstScreen: (value: string) => void;
// };
export default function SlideStart() {
  const [open, setOpen] = useState(false);
  const [rightAnswer, setRightAnswer] = useState(true);
    const [corect,setCorrect]=useState<null |number>(null)

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

  const HandleChek = (val: string,index:number) => {

    if (val === SlideData[lastSlide].value) {
      setCorrect(index)
      correctAudio?.play();
      setOpen(true);
      setRightAnswer(true);
      setTimeout(() => {
        setOpen(false);
        swiperRef.current?.slideNext();
      }, 2000);
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
    setCorrect(null);
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-5">
      <div className="w-[800px] ">
        <h1 className="text-center text-3xl pb-4 text-black">
        When we are polite
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
              <div className="flex justify-center items-center flex-col  gap-3 w-full p-3 text-black">
                <div className="   flex justify-center items-center ">
                  <div className="relative w-[500px] h-[400px]">
                  <Image src={item.image} fill alt="image" className="object-contain" />
                  </div>
                </div>
                <div className="  flex  gap-2 justify-center items-center flex-wrap ">
                  {
                                      optionData.map((i,ind)=>(
                                        <h2 key={ind} onClick={()=>HandleChek(i.option1,ind)} className={`${corect == ind ? "bg-green-500":"bg-yellow-400"} cursor-pointer  min-h-[30px]  min-w-[250px] px-8 py-1 rounded-lg text-center shadow-md shadow-black`}>{i.option1}</h2>
                                      ))
                                    }
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {rightAnswer ? (
        <BRAVOModle open={open} setOpen={setOpen} src={"/C16/Bravo.jpg"} />
      ) : (
        <KeepTryingModel open={open} setOpen={setOpen} />
      )}
    </div>
  );
}
