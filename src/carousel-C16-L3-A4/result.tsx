import React from "react";
import { TiStarFullOutline } from "react-icons/ti";

type myProps = {
  result: { id: number; value: string; isCorrect: boolean }[];
};
const Result = ({ result }: myProps) => {
  console.log(result);
  return (
    <div className="bg-[#F8FAFC] min-h-screen flex justify-center items-center">
      <div className="min-w-[500px] min-h-[300px] shadow-md flex-col bg-red-400 shadow-black rounded-lg flex justify-start items-center">
        <h4 className="text-5xl min-h-[100px] py-4">Result</h4>
        <div className="flex flex-wrap justify-center items-center gap-3 w-full">
          {result.map((i, indx) =>
            i.value.length > 3 ? (
              <div
                key={indx}
                className="flex justify-center items-center text-2xl"
              >
                <TiStarFullOutline className="text-yellow-400  text-[100px]" />
              </div>
            ) : i.value.length == 0? (
              <div key={indx} className="text-2xl text-white">
                Try Again
              </div>
            ):""
          )}
        </div>
        <h4 className="text-2xl min-h-[100px] py-4">Good Job </h4>

      </div>
    </div>
  );
};

export default Result;
