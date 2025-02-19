import React from 'react'
import { IoHome } from "react-icons/io5";
import { IoMdRefresh } from "react-icons/io";


type slideProps ={
  setIsFirstScreen : (value:string)=>void
}

const ResultC13A4 = ({setIsFirstScreen}:slideProps) => {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center flex-col gap-3">
        <div className="w-[400px]  shadow shadow-black text-center p-5 rounded-lg">
          {/* <h1 className="text-center text-3xl py-4 text-black ">
            Thumbs up/thumbs down
          </h1> */}

          <h2 className='text-black text-lg'>Great job today! We will see you next time!
          </h2>
         
        </div>
      <div className="w-[400px] flex justify-center items-center">
      <div className=" flex justify-center items-center  p-5 rounded-lg">
          <div
          onClick={()=>setIsFirstScreen("firstSlid")}
          className='border w-[50px] h-[50px] flex justify-center items-center text-2xl text-black border-black bg-yellow-400 shadow-inner shadow-black  rounded-full hover:scale-90 cursor-pointer'><IoHome/></div>
        </div>
        <div className="flex justify-center items-center  p-5 rounded-lg">
          <div
          onClick={()=>setIsFirstScreen("slide")}
          className='border w-[50px] h-[50px] flex justify-center items-center text-2xl text-black border-black bg-yellow-400 shadow-inner shadow-black  rounded-full hover:scale-90 cursor-pointer'><IoMdRefresh/></div>
        </div>
      </div>
      </div>
    );

}

export default ResultC13A4
