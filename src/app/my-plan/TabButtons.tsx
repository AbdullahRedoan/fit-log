import { useContext, useState } from "react";
import { WorkoutContext } from "../context/WorkoutContext";
import { IWorkout } from "@/types/workout.type";
import { toast } from "react-toastify";

const TabButtons = ({ workout }: { workout: IWorkout }) => {
  
  const { myWorkouts, setMyWorkouts, isDone, setIsDone } = useContext(WorkoutContext);
  const { id } = workout;
  const handleDeleteWorkoutTab = (id: number) => {
    const restWorkouts = myWorkouts.filter((workout) => workout.id !== id);
    setMyWorkouts(restWorkouts);
    toast.success(`${workout.name} is removed from Today's Plan`)
  };

  const handleMarkDone = (workout : IWorkout)=>{
      setIsDone([...isDone, workout])
      toast.success(`${workout.name} is marked as done`)
  }
  const isMarkedDone = isDone.some(w => w.id === id)
  return (
    <div className="flex gap-2">
      <button
        onClick={() => handleMarkDone(workout)}
        className={`inline-flex items-center gap-1.5 bg-[#ccff00] hover:opacity-90 text-black px-3 rounded-md text-xs font-bold transition-opacity cursor-pointer ${isMarkedDone ? "bg-gray-200" : ""}`}
        disabled={isMarkedDone}
      >
        <span>{!isMarkedDone ? "Mark as Done" : "✓Done"}</span>
      </button>
      <button
        onClick={() => handleDeleteWorkoutTab(id)}
        className="p-2 bg-neutral-800 hover:bg-red-500/20 hover:text-red-400 text-neutral-400 rounded-md transition-colors cursor-pointer"
        title="Remove"
      >
        ✕
      </button>
    </div>
  );
};

export default TabButtons;
