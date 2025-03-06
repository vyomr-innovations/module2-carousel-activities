"use client";
import React, { useState } from "react";
import SlideC15 from "./slideC15";
import Start from "./start";
import Result from "./result";

const CarouseC16L3A4 = () => {
  const [isFirstScreen, setIsFirstScreen] = useState("Start");
  const [result, setResult] = useState<
  { id: number; value: string; isCorrect: boolean }[]
>([]);
  return (
    <div>
      {isFirstScreen == "Start" && (
        <Start setIsFirstScreen={setIsFirstScreen} />
      )}
      {isFirstScreen == "QusSlide" && <SlideC15 setResult={setResult}  result={result} setIsFirstScreen={setIsFirstScreen} />}
      {isFirstScreen == "result" && <Result  result={result} />}
    </div>
  );
};

export default CarouseC16L3A4;
