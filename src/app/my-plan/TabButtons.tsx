import { useContext, useState } from "react";
import { WorkoutContext } from "../context/WorkoutContext";
import { IWorkout } from "@/types/workout.type";

const TabButtons = ({ workout }: { workout: IWorkout }) => {
  const [isDone, setIsDone] = useState(false);
  const { myWorkouts, setMyWorkouts } = useContext(WorkoutContext);
  const { id } = workout;
  const handleDeleteWorkoutTab = (id: number) => {
    const restWorkouts = myWorkouts.filter((workout) => workout.id !== id);
    setMyWorkouts(restWorkouts);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setIsDone(true)}
        className={`inline-flex items-center gap-1.5 bg-[#ccff00] hover:opacity-90 text-black px-3 rounded-md text-xs font-bold transition-opacity cursor-pointer ${isDone ? "bg-gray-200" : ""}`}
        disabled={isDone}
      >
        <span>{!isDone ? "Mark as Done" : "✓Done"}</span>
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
