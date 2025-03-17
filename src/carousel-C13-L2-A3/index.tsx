"use client";
import React, { useState } from "react";
import FirstSlide from "./firstSlid";
import SlideStartSec from "./slides";
// import ResultSec from "./result";

const CrouselC13L2A3= () => {
  const [isFirstScreen, setIsFirstScreen] = useState("firstSlid");
  return <>
  {isFirstScreen === "firstSlid" && <FirstSlide setIsFirstScreen={setIsFirstScreen} />}
  {isFirstScreen === "slide" && <SlideStartSec  />}
  {/* {isFirstScreen === "result" && <ResultSec setIsFirstScreen={setIsFirstScreen}/>} */}
  
  
  
  </>;
};

export default CrouselC13L2A3;
