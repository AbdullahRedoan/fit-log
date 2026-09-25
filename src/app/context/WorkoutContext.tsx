"use client";
import { IWorkout } from '@/types/workout.type';
import React, { createContext, useState } from 'react';


interface IWorkoutContext {
    myWorkouts: IWorkout[];
    setMyWorkouts: React.Dispatch<React.SetStateAction<IWorkout[]>>;
    savedWorkouts: IWorkout[];
    setSavedWorkouts: React.Dispatch<React.SetStateAction<IWorkout[]>>;
}

export const WorkoutContext = createContext<IWorkoutContext>({
    myWorkouts: [],
    setMyWorkouts: () => {},
    savedWorkouts: [],
    setSavedWorkouts: () => {},
});


const WorkoutProvider = ({ children }: { children: React.ReactNode }) => {
    const [myWorkouts, setMyWorkouts] = useState<IWorkout[]>([]);
    const [savedWorkouts, setSavedWorkouts] = useState<IWorkout[]>([]);

    const sharedData = {
        myWorkouts,
        setMyWorkouts,
        savedWorkouts,
        setSavedWorkouts
    }

    return <WorkoutContext.Provider value={sharedData}>
        {children}
    </WorkoutContext.Provider>
};

export default WorkoutProvider;