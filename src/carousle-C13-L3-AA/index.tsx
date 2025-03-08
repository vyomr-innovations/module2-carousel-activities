"use client"
import React, { useState } from 'react'
import StartSlid from './startSlid'
import Slide from './a2Slide'
// import Result2B from './result'

const CrouselC13L3AA = () => {
  const [isFirstScreen,setIsFirstScreen] =useState("strartSlid")
  return (
    <div>
      {isFirstScreen == "strartSlid" && <StartSlid setIsFirstScreen={setIsFirstScreen}/>}
      {isFirstScreen == "slide" && <Slide />}
      {/* {isFirstScreen == "result" && <Result2B setIsFirstScreen={setIsFirstScreen}/>} */}
    </div>
  )
}

export default CrouselC13L3AA
