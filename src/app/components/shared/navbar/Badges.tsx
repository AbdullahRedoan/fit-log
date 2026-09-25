"use client"
import { WorkoutContext } from "@/app/context/WorkoutContext";
import Link from "next/link";
import React, { useContext } from "react";

const Badges = () => {
    const {myWorkouts, savedWorkouts} = useContext(WorkoutContext)
  return (
    <div className="flex items-center gap-3">
      <Link
        href="/my-plan"
        className="flex items-center gap-2 bg-[#ccff00] text-black px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium tracking-wide shadow-sm hover:opacity-90 transition-opacity"
      >
        <span>Plan</span>
        <span className="bg-black/20 text-black px-1.5 py-0.5 rounded-full text-[10px]">
          {myWorkouts.length}
        </span>
      </Link>

      {/* Saved Badge (Outline/border only) */}
      <Link
        href="/my-plan"
        className="flex items-center gap-2 border border-neutral-700 text-white px-2.5 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium tracking-wide hover:border-neutral-500 transition-colors"
      >
        <span>Saved</span>
        <span className="text-neutral-400 text-[10px]">{savedWorkouts.length}</span>
      </Link>
    </div>
  );
};

export default Badges;
