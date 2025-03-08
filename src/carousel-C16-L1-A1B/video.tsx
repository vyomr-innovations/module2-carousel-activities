import React from "react";
import { FaArrowRight } from "react-icons/fa";


type myProps = {
  setIsFirstScreen: (value: string) => void;
};

const VideoSlide = ({ setIsFirstScreen }: myProps) => {
  return (
    <div className="bg-[#F8FCFA] min-h-screen flex flex-col gap-10 justify-center items-center">
      <video
        src="/C16/video.mp4"
        controls
        autoPlay
        className="shadow-black shadow-md"
      ></video>

      <div className="border border-black rounded-lg px-8 py-1 shadow-inner shadow-[#000000b9] bg-yellow-400 hover:scale-90">
        <h3
          className="text-[30px]  cursor-pointer text-black"
          onClick={() => setIsFirstScreen("imageSlide")}
        >
          <FaArrowRight/>
        </h3>
      </div>
    </div>
  );
};

export default VideoSlide;
