import React from "react";
import { FaArrowRight } from "react-icons/fa";


type myProps = {
  setIsFirstScreen: (value: string) => void;
};

const VideoSlide = ({ setIsFirstScreen }: myProps) => {
  return (
    <div className="bg-[#F8FCFA] min-h-screen flex flex-col gap-10 justify-center items-center">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/PYx_fXYcO74?si=JU1QspYWCiDP3NoO" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

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
