"use client"
import { useState } from "react";
import MusicSlide from "./musicSlid";
import FirstSlid from "./firstSlid";

const MusicCarousel = () => {
   const [isFirstScreen,setIsFirstScreen] =useState("first")

  return(
<div>
{isFirstScreen == "first" && <FirstSlid setIsFirstScreen={setIsFirstScreen} />}
{isFirstScreen == "MusicSlid" && <MusicSlide />}
</div>
  ) 
};

export default MusicCarousel;
