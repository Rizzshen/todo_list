import { TemporaryCard } from "./TemporaryCard";
import { useState } from "react";

export function CreateButton({onTaskAdd}) {
  const [showTempCard, setShowTempCard] = useState(false);
  return (
    <div className="w-56 min-h-[10rem] p-4 rounded-2xl border-2 border-gray-400 bg-gray-800 text-white shadow-sm flex flex-col justify-center items-center transition-all duration-200 hover:shadow-md cursor-pointer">
      {showTempCard ? (
        <TemporaryCard onTaskAdd={onTaskAdd} onClose={() => setShowTempCard(false)} />
      ) : (
        <div
        className="cursor-pointer px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-full text-center hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg"
        onClick={() => setShowTempCard(true)}
      >
        + Add Card
      </div>
      )}
    </div>
  );
}
