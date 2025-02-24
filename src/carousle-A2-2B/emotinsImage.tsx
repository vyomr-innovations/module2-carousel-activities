import Image from 'next/image';
import React from 'react'
// import { FaArrowRight } from 'react-icons/fa';

// type SlideProps = {
//   setIsFirstScreen: (value: string) => void;
// };
const EmotinsImage = () => {
   return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="w-[500px] ">
          <div>
            <div className="p-5 relative text-black flex justify-center items-center  shadow-md shadow-black overflow-hidden rounded-lg">
             <Image src="/C13-L1-A2/Plutchik_Dyads.png" width={400} height={200} alt="image"/>
            </div>
          </div>
  
         
        </div>
      </div>
    );
}

export default EmotinsImage
