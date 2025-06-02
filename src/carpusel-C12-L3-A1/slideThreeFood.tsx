import React, { useState } from "react";

const SlideThreeFood = () => {
  const [sol1, setSol1] = useState(false);
  const [sol2, setSol2] = useState(false);
  return (
    <div className="flex justify-center items-center  flex-col gap-8">
      <h4 className="text-black text-xl text-center">
        You have $70 to spend on a meal of 4 people. Use the menu below to
        decide how you will spend your money. Then plan your meal on the chart.
        You can assume that everyone will eat each type of food you buy so you
        need 4 units of each item.
      </h4>
      <h4 className="w-full text-black text-2xl text-center font-bold">
        ‘I can do it’{" "}
      </h4>


      <div className="w-full  border border-black">
        <div className="grid grid-cols-12 place-items-center w-full">
          <div className="col-span-4 border w-full text-center text-black">
            Mac n Cheese
          </div>
          <div className="col-span-4 border w-full text-center text-black">
            Pumpkin pie
          </div>
          <div className="col-span-4 border w-full text-center text-black">
          Fries
          </div>
          <div className="col-span-4 border w-full text-center text-black">
            3.5
          </div>
          <div className="col-span-4 border w-full text-center text-black">
            5
          </div>
          <div className="col-span-4 border w-full text-center text-black">
            2
          </div>
        </div>

        <div className="grid grid-cols-12 place-items-center w-full">
          <div className="col-span-4 border w-full text-center text-black">
            Rolls
          </div>
          <div className="col-span-4 border w-full text-center text-black">
            Burger
          </div>
          <div className="col-span-4 border w-full text-center text-black">
            Pizza
          </div>
          <div className="col-span-4 border w-full text-center text-black">
            2.5
          </div>
          <div className="col-span-4 border w-full text-center text-black">
            4.5
          </div>
          <div className="col-span-4 border w-full text-center text-black">
            8
          </div>
        </div>
      </div>



      {sol1 ? (
        <div className="w-full flex flex-col gap-3 ">
          <h3 className="font-bold text-black ">Solution 1:</h3>

          <div className="grid grid-cols-12 w-full place-items-center border border-black">
            <div className="col-span-4 border text-center text-black font-bold w-full place-items-center">
              Food
            </div>
            <div className="col-span-4 border text-center text-black font-bold w-full place-items-center">
              Cost per person
            </div>
            <div className="col-span-4 border text-center text-black font-bold w-full place-items-center">
              Total
            </div>
            {/* ============= */}
            <div className="col-span-4 border text-center text-black  w-full ">
              Fries
            </div>
            <div className="col-span-4 border text-center text-black  w-full ">
              2
            </div>
            <div className="col-span-4 border text-center text-black  w-full ">
              4 x 2 = 8
            </div>
            {/* ============= */}
            <div className="col-span-4 border text-center text-black  w-full ">
              Pizza
            </div>
            <div className="col-span-4 border text-center text-black  w-full ">
              8
            </div>
            <div className="col-span-4 border text-center text-black  w-full ">
              4 x 8 = 32
            </div>
            {/* ============= */}
            <div className="col-span-4 border text-center text-black  w-full ">
              Pumpkin pie
            </div>
            <div className="col-span-4 border text-center text-black  w-full ">
              5
            </div>
            <div className="col-span-4 border text-center text-black  w-full ">
              4 x 5 = 20
            </div>
            {/* ============= */}
            <div className="col-span-4 border text-center text-black  w-full ">
              Rolls
            </div>
            <div className="col-span-4 border text-center text-black  w-full ">
              2.5
            </div>
            <div className="col-span-4 border text-center text-black  w-full ">
              4 x 2.5 = 10
            </div>
            {/* ============= */}
            <div className="col-span-8 text-black border text-left pl-[100px] font-bold w-full ">
              Total cost
            </div>

            <div className="col-span-4 border text-center text-black  w-full font-bold ">
              $70
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
{
    sol2 ?

      <div className="w-full flex flex-col gap-3 ">
        <h3 className="font-bold text-black ">Solution 2:</h3>

        <div className="grid grid-cols-12 w-full place-items-center border border-black">
          <div className="col-span-4 border text-center text-black font-bold w-full place-items-center">
            Food
          </div>
          <div className="col-span-4 border text-center text-black font-bold w-full place-items-center">
            Cost per person
          </div>
          <div className="col-span-4 border text-center text-black font-bold w-full place-items-center">
            Total
          </div>
          {/* ============= */}
          <div className="col-span-4 border text-center text-black  w-full ">
            Fries
          </div>
          <div className="col-span-4 border text-center text-black  w-full ">
            2
          </div>
          <div className="col-span-4 border text-center text-black  w-full ">
            4 x 2 = 8
          </div>
          {/* ============= */}
          <div className="col-span-4 border text-center text-black  w-full ">
            Burger
          </div>
          <div className="col-span-4 border text-center text-black  w-full ">
            4.5
          </div>
          <div className="col-span-4 border text-center text-black  w-full ">
            4 x 4.5 = 18
          </div>
          {/* ============= */}
          <div className="col-span-4 border text-center text-black  w-full ">
            Mac n Cheese
          </div>
          <div className="col-span-4 border text-center text-black  w-full ">
            3.5
          </div>
          <div className="col-span-4 border text-center text-black  w-full ">
            4 x 3.5 = 14
          </div>
          {/* ============= */}
          <div className="col-span-4 border text-center text-black  w-full ">
            Pumpkin pie
          </div>
          <div className="col-span-4 border text-center text-black  w-full ">
            5
          </div>
          <div className="col-span-4 border text-center text-black  w-full ">
            4 x 5 = 20
          </div>

          {/* ============= */}
          <div className="col-span-4 border text-center text-black  w-full ">
            Rolls
          </div>
          <div className="col-span-4 border text-center text-black  w-full ">
            2.5
          </div>
          <div className="col-span-4 border text-center text-black  w-full ">
            4 x 2.5 = 10
          </div>
          {/* ============= */}
          <div className="col-span-8 text-black border text-left pl-[100px] font-bold w-full ">
            Total cost
          </div>

          <div className="col-span-4 border text-center text-black  w-full font-bold ">
            $70
          </div>
        </div>
      </div>
      :""
}

      <div className="flex gap-1">
        <button onClick={()=>setSol1(true)} className={`${sol1 ? "hidden":"block"} text-white bg-violet-900 px-5 py-2 rounded-lg  cursor-pointer`}>
          Check Solution 1
        </button>
        <button  onClick={()=>setSol2(true)} className={`${sol2 ? "hidden":"block"} text-white bg-violet-900 px-5 py-2 rounded-lg  cursor-pointer`}>
          Check Solution 2
        </button>
      </div>
    </div>
  );
};

export default SlideThreeFood;
