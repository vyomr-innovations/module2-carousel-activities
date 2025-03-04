"use client";
import BRAVOModle from "@/components/brovomodle";
import KeepTryingModel from "@/components/KeepTryingModel";
import Image from "next/image";
import { useEffect, useState } from "react";

const Emotins = [
  { name: "Surprise.",img:"/emojis/Surprise.png" },
  { name: "Anticipation",img:"/emojis/Anticipation.png" },
  { name: "Happy",img:"/emojis/Happy.png" },
  { name: "Disgust",img:"/emojis/Disgust.png" },
  { name: "Angry",img:"/emojis/Angry.png" },
  
];

interface myProps {
  item: string;
}
const EmotionBar = ({ item }: myProps) => {
  const [open, setOpen] = useState(false);
  const [rightAnswer, setRightAnswer] = useState(true);
  const [selected, setSelected] = useState<string | null>(null);
  const [wrongAudio, setWrongAudio] = useState<HTMLAudioElement | null>(null);
  const [correctAudio, setCorrectAudio] = useState<HTMLAudioElement | null>(
    null
  );

  useEffect(() => {
    setWrongAudio(new Audio("/sound/wrong_buzzer.mp3"));
    setCorrectAudio(new Audio("/sound/correct.mp3"));
  }, []);

  const handleCheck = (val: string) => {
    if (item === val) {
      setOpen(true);
      setRightAnswer(true);
      correctAudio?.play();
      setSelected(val);
    } else {
      setOpen(true);
      setRightAnswer(false);
      wrongAudio?.play();
    }
  };

  return (
    <div className="flex flex-col justify-between items-center h-full p-2">
      {Emotins.map((item, index) => (
        <div
          key={index}
          className={`cursor-pointer ${
            selected === item.name ? "bg-green-400" : "bg-yellow-400"
          } w-[200px] px-5 py-2 min-h-[50px] flex justify-center items-center text-black rounded-lg shadow shadow-[#000000a3] font-bold text-lg text-center hover:scale-95`}
          onClick={() => handleCheck(item.name)}
        >
          <h3>{item.name}</h3>
         <div className="relative w-[60px] h-[60px] ">
         <Image src={item.img} fill className="" alt=""/>
         </div>
        </div>
      ))}
      {rightAnswer ? (
        <BRAVOModle open={open} setOpen={setOpen} src="/C13-L1-A2/Bravo.jpg" />
      ) : (
        <KeepTryingModel open={open} setOpen={setOpen} />
      )}
    </div>
  );
};

export default EmotionBar;
