"use client"
import React, { useState } from 'react'
import StartSlid from './startSlid'
import EmotinsImage from './emotinsImage'
import C13L1A2Slide from './a2Slide'

const CrouselC13A22B = () => {
  const [isFirstScreen,setIsFirstScreen] =useState("strartSlid")
  return (
    <div>
      {isFirstScreen == "strartSlid" && <StartSlid setIsFirstScreen={setIsFirstScreen}/>}
      {isFirstScreen == "slide" && <C13L1A2Slide setIsFirstScreen={setIsFirstScreen}/>}
      {isFirstScreen == "emotionImage" && <EmotinsImage />}
    </div>
  )
}

export default CrouselC13A22B
