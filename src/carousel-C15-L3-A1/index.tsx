"use client"
import React, { useState } from 'react'
import StrartSlide from './start'
import TungTwisterSlide from './tungTwister'

const CarouselC15L3A1 = () => {
    const [isFirstScreen,setIsFirstScreen] =useState("strartSlide")
    return (
      <div>
        {isFirstScreen == "strartSlide" && <StrartSlide setIsFirstScreen={setIsFirstScreen}/> }
        {isFirstScreen == "TungTwisterSlide" && <TungTwisterSlide/> }
      </div>
    )
}

export default CarouselC15L3A1
