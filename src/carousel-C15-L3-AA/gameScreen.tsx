import React, { useState } from "react";
import CategoryData from "@/carousel-C15-L3-AA/category.json";
import CardData from "@/carousel-C15-L3-AA/card.json";

const GameScreen = () => {
  const [dropPlace, setDropPlace] = useState<{ [key: string]: string[] }>({});
  const [category, setCategory] = useState(CategoryData);

  const handleDrag = (e:  React.DragEvent, pick: { name: string; value: string }) => {
    e.dataTransfer.setData("task", JSON.stringify(pick));
  };

  const handleDrop = (e: React.DragEvent, cardName: string) => {
    e.preventDefault();
    const DropItem = JSON.parse(e.dataTransfer.getData("task"));

    if (DropItem.value === cardName) {
      setDropPlace((prev) => {
        const existingItems = prev[cardName] || [];
        if (!existingItems.includes(DropItem.name)) {
          // ✅ Item ko Drop Box me add karo
          const updatedCategory = category.filter((item) => item.name !== DropItem.name);
          setCategory(updatedCategory);
          return {
            ...prev,
            [cardName]: [...existingItems, DropItem.name],
          };
        }
        return prev; // Agar item pehle se hai toh kuch mat karo
      });
    } else {
      console.log(DropItem.name, "Not Matched");
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col justify-start items-center gap-5 p-5">
      <h3 className="text-black text-3xl">Self Determination Vocabulary</h3>

      {/* Draggable Buttons */}
      <div className="w-[800px] flex flex-wrap gap-2 justify-center items-center border-black border border-dotted p-4">
        {category.map((item, index) => (
          <button
            key={index}
            draggable
            onDragStart={(e) => handleDrag(e, item)}
            className="bg-[#ffc100] text-black px-8 py-1 rounded-lg cursor-grab"
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Drop Boxes */}
      <div className="flex justify-center items-center gap-3 py-8">
        {CardData.map((item, index) => (
          <div
            key={index}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, item.cardName)}
            className="w-[250px] h-[320px] bg-purple-600 rounded-lg flex flex-col justify-start items-center p-2 gap-2"
          >
            <h3 className="text-center text-lg p-2 text-white">
              {item.cardName}
            </h3>
            {dropPlace[item.cardName]?.map((droppedItem, i) => (
              <div key={i} className="bg-[#ffc100] text-black p-1 rounded-lg">
                {droppedItem}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameScreen;
