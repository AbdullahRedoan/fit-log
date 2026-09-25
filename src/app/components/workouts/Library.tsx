"use client"

import { IWorkout } from "@/types/workout.type";
import WorkoutCard from "./WorkoutCard";
import { useContext } from "react";
import { WorkoutContext } from "@/app/context/WorkoutContext";

const Library = ({workoutsData} : {workoutsData : IWorkout[]}) => {
    const {sortBy} = useContext(
        WorkoutContext
    )
    const sortWorkouts = (workouts : IWorkout[]) =>{
        const sortedWorkouts = [...workouts];
        if(sortBy === "duration"){
            sortedWorkouts.sort((a, b) => a.duration - b.duration)
        }else if(sortBy === "calories"){
            sortedWorkouts.sort((a, b) => a.caloriesBurned - b.caloriesBurned   )
        }else if( sortBy === "rating"){
            sortedWorkouts.sort((a,b)=>b.rating - a.rating)
        }
        return sortedWorkouts;
    }

    const workouts = sortWorkouts(workoutsData)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:p-6 lg:p-8">
        {workouts.map((workout: IWorkout) => {
          return <WorkoutCard key={workout.id} workout={workout} />;
        })}
      </div>
    );
};

export default Library;