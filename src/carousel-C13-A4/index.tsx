"use client";
import React, { useState } from "react";
import FirstSlide from "./firstSlid";
import SlideStartSec from "./slides";
// import ResultC13A4 from "./result";

const CrouselC13A4= () => {
  const [isFirstScreen, setIsFirstScreen] = useState("firstSlid");
  return <>
  {isFirstScreen === "firstSlid" && <FirstSlide setIsFirstScreen={setIsFirstScreen} />}
  {isFirstScreen === "slide" && <SlideStartSec setIsFirstScreen={setIsFirstScreen} />}
  {/* {isFirstScreen === "result" && <ResultC13A4 setIsFirstScreen={setIsFirstScreen}/>} */}
  
  
  
  </>;
};

export default CrouselC13A4;
