"use client"
import React, { useState } from 'react'
import StartGame from './start'
import GameScreen from './gameScreen';

const CarouselC15L3AA = () => {
    const [isFirstScreen,setIsFirstScreen] =useState("start");
  return (
    <div>
      {isFirstScreen == "start" && <StartGame setIsFirstScreen={setIsFirstScreen} />}
      {isFirstScreen == "GameSlide" && <GameScreen  />}
    </div>
  )
}

export default CarouselC15L3AA
