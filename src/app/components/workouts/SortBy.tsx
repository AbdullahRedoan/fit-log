"use client"
import { WorkoutContext } from "@/app/context/WorkoutContext";
import { useContext } from "react";


const SortBy = () => {
    const {setSortBy} = useContext(WorkoutContext)
    
  return (
    <div className="flex gap-2 col-span-2 items-center">
      <h1 className="font-semibold whitespace-nowrap ">Sort by:</h1>
      <select 
      onChange={(e)=> setSortBy(e.target.value as "duration" 
        | "calories" 
        | "rating"
      )}
        defaultValue="Duration"
        className="select bg-neutral-900 text-white focus:border-[#ccff00] w-full border border-[#ccff00] py-2 px-5 rounded-xl"
      >
        <option value={"duration"}>Duration</option>
        <option value={"calories"}>Calories</option>
        <option value={"rating"}>Rating</option>
      </select>
    </div>
  );
};

export default SortBy;
