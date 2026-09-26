"use client";
import { IWorkout } from "@/types/workout.type";
import React, { useContext } from "react";
import { FaCalendarPlus } from "react-icons/fa6";
import { WorkoutContext } from "../context/WorkoutContext";
import { toast } from "react-toastify";

const TodayButton = ({ workout }: { workout: IWorkout }) => {
  const { myWorkouts, setMyWorkouts } = useContext(WorkoutContext);
  const handleAddToToday = () => {
    if (myWorkouts.some((w) => w.id === workout.id)) {
      toast.error(`${workout.name} is already in today's plan!`);
      return;
    } else {
      setMyWorkouts([...myWorkouts, workout]);
      toast.success(`${workout.name} is added to today's plan!`);
    }
  };

  return (
    <button
      onClick={handleAddToToday}
      className="inline-flex items-center justify-center gap-2 bg-[#ccff00] text-black px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity shadow-sm cursor-pointer"
    >
      <FaCalendarPlus className="w-4 h-4 stroke-3" />
      <span>Add to today&apos;s plan</span>
    </button>
  );
};

export default TodayButton;
