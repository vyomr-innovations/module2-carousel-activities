"use client";
import React, { useState } from "react";
import SlideStart from "./slides";
import Result from "./result";

const CrouselFirst = () => {
  const [isFirstScreen, setIsFirstScreen] = useState("slide");
  return <>
  {isFirstScreen === "slide" && <SlideStart setIsFirstScreen={setIsFirstScreen} />}
  {isFirstScreen === "result" && <Result setIsFirstScreen={setIsFirstScreen}/>}
  
  
  
  </>;
};

export default CrouselFirst;
