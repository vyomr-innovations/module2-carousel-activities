"use client";
import React, { useEffect, useState } from "react";

type myProps = {
  setIsFirstSlid: (value: string) => void;
};

const cardData = [
  { id: 1, value: "a", word: "Enhance" },
  { id: 2, value: "d", word: "Smart" },
  { id: 3, value: "b", word: "Unbeatable " },
  { id: 4, value: "e", word: "Immediately" },
  { id: 5, value: "c", word: "Memorable" },
  { id: 6, value: "b", word: "Unstoppable" },
  { id: 7, value: "c", word: "Unforgettable" },
  { id: 8, value: "a", word: "Power up" },
  { id: 9, value: "d", word: "Sharp" },
  { id: 10, value: "e", word: "Now" },
];

const LevelThree = ({ setIsFirstSlid }: myProps) => {
  const [selectedCards, setSelectedCards] = useState<
    { id: number; value: string }[]
  >([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]); // Track flipped cards

  const handleCheck = (card: { id: number; value: string }) => {
    if (selectedCards.length === 2 || matchedCards.includes(card.id)) return;

    const newSelectedCards = [...selectedCards, card];
    setSelectedCards(newSelectedCards);
    setFlippedCards([...flippedCards, card.id]);

    if (newSelectedCards.length === 2) {
      if (newSelectedCards[0].value === newSelectedCards[1].value) {
        setMatchedCards((prev) => [
          ...prev,
          newSelectedCards[0].id,
          newSelectedCards[1].id,
        ]);
      }
      setTimeout(() => {
        setSelectedCards([]);
        setFlippedCards((prev) =>
          prev.filter((id) => matchedCards.includes(id))
        );
      }, 1000);
    }
  };

  useEffect(() => {
    if (matchedCards.length === cardData.length) {
      setTimeout(() => {
        setIsFirstSlid("result_page"); // Move to next screen
      }, 1000);
    }
  }, [matchedCards, setIsFirstSlid]);

  return (
    <div className="min-h-screen bg-[#DCC352] flex justify-center items-center flex-col">
      <h3 className="text-2xl font-bold mb-4 text-black ">Level 3</h3>
      <div className="min-h-[500px] w-full  grid grid-cols-10 place-items-center">
        {cardData.map((item) => (
          <div
            key={item.id}
            className="card col-span-2"
            onClick={() => handleCheck(item)}
          >
            <div
              className={`card-inner transition-transform duration-500 ease-in-out ${
                flippedCards.includes(item.id) || matchedCards.includes(item.id)
                  ? "rotate-y-180"
                  : ""
              }`}
              style={{
                background: matchedCards.includes(item.id)
                  ? "#89AC46"
                  : "#F08A5D",
                borderRadius: "10px",
                transform:
                  flippedCards.includes(item.id) ||
                  matchedCards.includes(item.id)
                    ? "rotateY(180deg)"
                    : "",
              }}
            >
              <div
                className="card-front shadow-md p-4 flex justify-center items-center bg-red-500"
                style={{ border: "5px solid white" }}
              >
                <p className="text-lg font-semibold"></p>
              </div>
              <div className="card-back  shadow-md p-4 flex justify-center items-center ">
                <p className="text-lg font-semibold">{item.word}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LevelThree;
