"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Swiper as SwiperClass } from "swiper";
import MusicData from "@/lib/music-carousel/musicData.json";

const MusicSlide = () => {
const slide = useState(new Array(9).fill(null))[0]; // Setter hata diya
  const swiperRef = useRef<SwiperClass | null>(null);
  const [imageShow, setImageShwo] = useState(false);
  const [index, setIndex] = useState<number>(0);
  const slideData = MusicData[index];

  const handleChange = (swipe: SwiperClass) => { //find slide index
    setIndex(swipe.activeIndex);
  };

  const handleEnd = () => {
    setImageShwo(true);
  };

  const handleNext = () => {
    if(index < MusicData.length -1 ){

        setImageShwo(false);
        setIndex((prev) => prev + 1);
    }
  };
  return (
    <div className="min-h-screen bg-[#F8FAFC]  flex flex-col justify-center items-center ">
        <h1 className="text-black text-3xl py-5">How do you feel?</h1>
      {imageShow ? (
        <div className="grid grid-cols-12 gap-3 w-full h-full p-5 place-items-center">
          {["/C13-L1-A1/dog_1.jpg", "/C13-L1-A1/dog_2.jpg"].map(
            (item, index) => (
              <div
                className="col-span-6   shadow-black shadow-md  rounded-lg overflow-hidden w-[600px] h-[400px] relative"
                key={index}
              >
                <Image
                  src={item}
                  fill
                  className="object-contain"
                  alt="emotion image"
                />
              </div>
            )
          )}

          <div className="col-span-12 py-5 flex items-center justify-center">
            <button
              onClick={handleNext}
              className="bg-yellow-400 text-black text-xl px-8 py-2 rounded-lg flex items-center gap-2 shadow-black shadow-inner hover:scale-90"
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <>
          <h2 className="text-black text-3xl text-center">A Little Curious</h2>
          <Swiper
            className="w-[400px]"
            slidesPerView={1}
            loop={false}
            autoplay={false}
            allowTouchMove={false}
            modules={[Navigation]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={handleChange}
          >
            {slide?.map((_, index) => (
              <SwiperSlide key={index} className="py-5" >
                <audio
                  src={slideData.music}
                  controls
                  onEnded={handleEnd}
                  className=" invert mx-auto w-[400px]  "
                ></audio>
              </SwiperSlide>
            ))}
          </Swiper>
          <h2 className="text-black text-3xl  text-center"> Close your eyes</h2>
        </>
      )}
    </div>
  );
};

export default MusicSlide;
