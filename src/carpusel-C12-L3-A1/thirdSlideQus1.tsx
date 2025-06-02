"use client"
import React, { ChangeEvent,  useState } from "react";
import Confetti from "react-confetti";

const ThirdSlideQus1 = () => {
    const [ans, setAns] = useState<string>("");
    
    const [show1, setShow1] = useState(false);
    const [btnShow, setBtnShow] = useState(false);
    const [confetti, setConfetti] = useState(false);

    
      const handleChang = (e: ChangeEvent<HTMLInputElement>) => {
        setAns(e.target.value);
      };
      const handleCheck = () => {
        if (ans == "82") {
        
          setConfetti(true);
          setTimeout(() => {
            setConfetti(false);
          }, 5000);
        } else {
         
          setBtnShow(true);
        }
      };
  return (
     <div className=" flex justify-center items-center flex-col gap-8 p-5">
      <h4 className="text-black text-2xl font-medium text-center">
        Here are two multi step math problems for you to solve. Remember to keep
        repeating <strong>{`‘I can do it’`}</strong> in your head.
      </h4>

      <div className="flex flex-col gap-4">
        <h5 className="text-black text-xl font-medium text-center">
         <b>1.</b>There are 3 bicycles and 19 cars in the garage at Mayra&rsquo;s building.
          How many wheels are there in the garage?
        </h5>
        <h5 className="text-black text-xl font-medium text-center">
          <input
            placeholder="Enter answer"
            type="text"
            value={ans}
            onChange={handleChang}
            className={` text-center border-b border-black outline-none w-[100px] placeholder:text-sm`}
          />
          wheels
        </h5>

        <div className="text-center flex gap-2 justify-center items-center">
          <button
            onClick={handleCheck}
            className={` text-white bg-violet-900 px-8 py-2 rounded-lg`}
          >
            check
          </button>
          {btnShow ? (
            <button
              onClick={() => setShow1(true)}
              className={` text-white bg-violet-900 px-8 py-2 rounded-lg`}
            >
              Explanation
            </button>
          ) : (
            ""
          )}
        </div>

      {
        show1 ?
          <div className="w-full text-center">
          <h2 className="text-blue-600">Step 1: Find the number of bicycle wheels</h2>
          <h2 className="text-blue-600">{`2 x 3 = 6 wheels`}</h2> 
          
           <h2 className="text-blue-600">{`Step 2: Find the number of car wheels`}</h2>
          <h2 className="text-blue-600">{`19 x 4 = 76 wheels`}</h2>
          <h2 className="text-blue-600">{`Step 3: Find the number of wheels together  6+76 = 82`}</h2>
        </div>:""
      }
      </div>
      {confetti ? <Confetti /> : ""}
    </div>
  )
}

export default ThirdSlideQus1
