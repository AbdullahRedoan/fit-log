"use client";
import { IWorkout } from '@/types/workout.type';
import React, { createContext, useState } from 'react';


interface IWorkoutContext {
    myWorkouts: IWorkout[];
    setMyWorkouts: React.Dispatch<React.SetStateAction<IWorkout[]>>;
    savedWorkouts: IWorkout[];
    setSavedWorkouts: React.Dispatch<React.SetStateAction<IWorkout[]>>;
    isDone: IWorkout[];
    setIsDone:React.Dispatch<React.SetStateAction<IWorkout[]>>
    activeButton: string;
    setActiveButton: React.Dispatch<React.SetStateAction<string>>
    activeNavButton: string
    setActiveNavButton: React.Dispatch<React.SetStateAction<string>>
}

export const WorkoutContext = createContext<IWorkoutContext>({
    myWorkouts: [],
    setMyWorkouts: () => {},
    savedWorkouts: [],
    setSavedWorkouts: () => {},
    isDone: [],
    setIsDone: () => {},
    activeButton: "today",
    setActiveButton: () => {},
    activeNavButton: "workouts",
    setActiveNavButton: () => {}
});


const WorkoutProvider = ({ children }: { children: React.ReactNode }) => {
    const [myWorkouts, setMyWorkouts] = useState<IWorkout[]>([]);
    const [savedWorkouts, setSavedWorkouts] = useState<IWorkout[]>([]);
    const [isDone, setIsDone] = useState<IWorkout[]>([]);
    const [activeButton, setActiveButton] = useState<string>("today")
    const [activeNavButton, setActiveNavButton] = useState<string>("workout")

    const sharedData = {
        myWorkouts,
        setMyWorkouts,
        savedWorkouts,
        setSavedWorkouts,
        isDone, 
        setIsDone,
        activeButton,
        setActiveButton,
        activeNavButton,
        setActiveNavButton
    }

    return <WorkoutContext.Provider value={sharedData}>
        {children}
    </WorkoutContext.Provider>
};

export default WorkoutProvider;