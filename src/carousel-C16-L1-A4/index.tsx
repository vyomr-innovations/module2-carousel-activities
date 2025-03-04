"use client";
import { useState } from "react";
import SlideStart from "./slides";
import StartSlide from "./start";

const CrouselC16L1A4 = () => {
    const [isFirstScreen,setIsFirstScreen] =useState("strartSlid")
  
  return <>
  { isFirstScreen === "strartSlid" && <StartSlide setIsFirstScreen={setIsFirstScreen} />}
  { isFirstScreen === "QustionSlide" && <SlideStart    />}
  
  
  </>;
};

export default CrouselC16L1A4;
