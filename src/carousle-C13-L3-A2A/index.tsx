"use client"
import React, { useState } from 'react'
import A22ASlide from './a2Slide'
import StartSlid from './startSlid'
// import Result2B from './result'

const CrouselC13L3A2A = () => {
  const [isFirstScreen,setIsFirstScreen] =useState("strartSlid")
  return (
    <div>
      {isFirstScreen == "strartSlid" && <StartSlid setIsFirstScreen={setIsFirstScreen}/>}
      {isFirstScreen == "slide" && <A22ASlide />}
      {/* {isFirstScreen == "result" && <Result2B setIsFirstScreen={setIsFirstScreen}/>} */}
    </div>
  )
}

export default CrouselC13L3A2A
