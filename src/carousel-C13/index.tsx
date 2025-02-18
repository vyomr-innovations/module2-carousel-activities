
"use client"
import ColorSlide from '@/app/C13-L1-WRMUP/colorSlide'
import React, { useState } from 'react'
import ResultC13 from './result'

const CarousaleC13=() => {

    const [isFirstScreen,setIsFirstScreen]=useState("colorSlid")

  return (
    <div>
    {isFirstScreen ==="colorSlid" && <ColorSlide setIsFirstScreen={setIsFirstScreen}/>}  
    {isFirstScreen ==="result" && <ResultC13 setIsFirstScreen={setIsFirstScreen}/>}  
    </div>
  )
}

export default CarousaleC13