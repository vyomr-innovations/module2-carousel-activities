"use client";
import React from "react";
import "swiper/css";

import "swiper/css/navigation";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";

type SlideProps = {
  setIsFirstScreen: (value: string) => void;
};
const StartSlid = ({ setIsFirstScreen }: SlideProps) => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="w-[500px] ">
        <div>
        <p className="text-center text-lg py-4 text-black ">How would you feel? Show me an emotion when someone is polite or impolite to you or around you.
        </p>
          <div className="p-5 relative text-black flex justify-center items-center  shadow-md shadow-black overflow-hidden rounded-lg">
           <Image src="/C13-L1-A2/main_image.jpg" width={300} height={200} alt="image"/>
          </div>
        </div>

        <div className=" py-4 flex items-center justify-around  text-black">
          <div
            className={`border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] hover:scale-90 bg-yellow-400`}
          >
            <FaArrowRight
              className="text-[40px]  cursor-pointer "
              onClick={() => setIsFirstScreen("slide")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartSlid;
