"use client"
import React, { ChangeEvent,  useState } from "react";
import Confetti from "react-confetti";

const ThirdslideQus2 = () => {
    const [ans, setAns] = useState<string>("");
        
        const [show1, setShow1] = useState(false);
        const [btnShow, setBtnShow] = useState(false);
        const [confetti, setConfetti] = useState(false);
  const handleChang = (e: ChangeEvent<HTMLInputElement>) => {
        setAns(e.target.value);
      };
      const handleCheck = () => {
        if (ans == "94") {
        
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

      <div className="flex flex-col gap-4">
        <h5 className="text-black text-xl font-medium text-center">
         <b>2.</b>Sharon and Justin already had 8 shells in their shell collection. Then they went to the beach to collect even more. Sharon found 3 limpet shells, 19 oyster shells, and 7 conch shells. Justin found 28 more shells than Sharon did. How many shells do the pair have all together?
        </h5>
        <h5 className="text-black text-xl font-medium text-center">
          <input
            placeholder="Enter answer"
            type="text"
            value={ans}
            onChange={handleChang}
            className={` text-center border-b border-black outline-none w-[100px] placeholder:text-sm`}
          />
          shells
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
          <h2 className="text-blue-600">Step 1: Find the total number of shells Sharon found.</h2>
          <h2 className="text-blue-600">3+19+7 = 29</h2> 
          
           <h2 className="text-blue-600">Step 2: Find the number of shells Justin found.</h2>
          <h2 className="text-blue-600">29+28 = 57</h2>
          <h2 className="text-blue-600">Step 3: Find the total number of shells found by both </h2>
          <h2 className="text-blue-600">8+29+57 = 94</h2>
          <h2 className="text-blue-600">Sharon and Justin have a total of 94 shells</h2>
        </div>:""
      }
      </div>
      {confetti ? <Confetti /> : ""}
    </div>
  )
}

export default ThirdslideQus2
