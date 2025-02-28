"use client"
import React, { useState } from 'react'
import StrartSlide from './start'
import QuizSlide from './quizSlide'

const CarouselC15L1A4 = () => {
    const [isFirstScreen,setIsFirstScreen] =useState("strartSlide")
    return (
      <div>
        {isFirstScreen == "strartSlide" && <StrartSlide setIsFirstScreen={setIsFirstScreen}/> }
        {isFirstScreen == "QuizSlide" && <QuizSlide />}
      </div>
    )
}

export default CarouselC15L1A4
