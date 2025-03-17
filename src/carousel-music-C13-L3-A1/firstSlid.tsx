import React from 'react'
import { IoArrowForward } from "react-icons/io5";



type myProps ={
    setIsFirstScreen :(value:string)=> void
}

const FirstSlid = ({setIsFirstScreen}:myProps) => {
  return (
    <div className='min-h-screen bg-[#F8FAFC] flex justify-center items-center'>
   <div className='min-h-[300px] w-[500px]  flex justify-center items-center gap-[50px] flex-col shadow-md shadow-black rounded-lg'>
   <h3 className='text-3xl text-black'>Recognise emotions</h3>
   <button className='bg-yellow-400 text-black text-xl px-8 py-2 rounded-lg flex items-center gap-2 shadow-black shadow-inner hover:scale-90' onClick={()=>setIsFirstScreen("MusicSlid")}>Start <IoArrowForward/></button>
   </div>
    </div>
  )
}

export default FirstSlid
