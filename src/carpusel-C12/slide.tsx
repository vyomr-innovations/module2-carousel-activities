"use client";
import "swiper/css";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import crouselData from "@/lib/carpusel-C12/carpuselC12First.json";
import { useRef, useState } from "react";
import Confetti from "react-confetti";

type myProps = {
    setIsFirstSlide:(value:string)=>void
}
const SlideC12L2A3 = ({setIsFirstSlide}:myProps) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastIndex,SetLastIndex]=useState<number | null>(null)
  const [right, setRight] = useState<boolean>(false);
  const [wrong, setWrong] = useState<number | null>(null);

const handleChange = (swipeIndex :SwiperClass)=>{
SetLastIndex(swipeIndex.activeIndex)
}


  const handleCheck = (checkNum: number, checkOption: number) => {
    if (checkNum === checkOption) {
      setRight(true);
      setTimeout(() => {
        setRight(false);
        swiperRef.current?.slideNext();
      }, 2000);
    } else {
      setWrong(checkNum);
      setTimeout(() => {
        setWrong(null);
      }, 2000);
    }
  };

  const  handleReStart = ()=>{
  setIsFirstSlide("Boxes")
  }
  return (
    <>
      <Swiper
        modules={[Navigation]}
        allowTouchMove={false}
        onSwiper={(swipe) => (swiperRef.current = swipe)}
        onSlideChange={handleChange}
      >
        {crouselData.map((item, index) => (
          <SwiperSlide className="relative" key={index}>
            <div className=" md:absolute top-0  w-full text-center py-5">
              <h1 className="text-2xl font-bold">
                Select the one with powerful words and at the end show a list of
                powerful words
              </h1>
            </div>

            {/* YE APNA CONTAINT SLIDE KA  */}

            <div className=" h-screen w-full flex  justify-around items-center flex-col md:flex-row ">
              <div className="bg-[#2DAA9E] h-full w-full flex items-center justify-center ">
                <h2
                  className={`text-3xl cursor-pointer   ${
                    wrong == 1 ? "bg-red-500" : "bg-[#E195AB]"
                  }  px-2 py-2 rounded-lg`}
                  onClick={() => handleCheck(1, item.correctOption)}
                >
                  {" "}
                  {item.text1}
                </h2>
              </div>

              <div className="bg-[#E195AB] h-full w-full flex items-center justify-center ">
                <h2
                  className={`text-3xl cursor-pointer   ${
                    wrong == 2 ? "bg-red-500" : "bg-[#2DAA9E]"
                  } px-2 py-2 rounded-lg`}
                  onClick={() => handleCheck(2, item.correctOption)}
                >
                
                  {item.text2}
                </h2>
              </div>
            </div>

            {/* YE APNA BTN   */}
            {
                lastIndex == crouselData.length -1 ?
            <div className="absolute bottom-5 left-[47%]">
                <button  className="bg-yellow-400 px-5 py-1 rounded-lg text-black text-3xl shadow shadow-black" onClick={handleReStart}>Next</button>
            </div>
:""
            }
          </SwiperSlide>
        ))}
        {right ? <Confetti /> : null}
      </Swiper>
    </>
  );
};

export default SlideC12L2A3;
