"use client";
import React, { useContext } from "react";
import { WorkoutContext } from "../context/WorkoutContext";
import WorkoutTab from "./WorkoutTab";
import Link from "next/link";

const MyPlanPage = () => {
  const { myWorkouts, savedWorkouts, activeButton, setActiveButton } = useContext(WorkoutContext);
  console.log(myWorkouts);
  let duration = 0;
  let calories = 0;
  {
    myWorkouts.map((w) => {
      duration += Number(w.duration);
      calories += Number(w.caloriesBurned);
    });
  }

  return (
    <div className="bg-[#121212] text-white min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-9xl mx-auto space-y-8">
        {/* Header & Subtitle */}
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight uppercase">
            MY PLAN
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Metrics Summary Row (3 Stat Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-neutral-900 border border-neutral-800 rounded-xl p-4 sm:p-5 divide-x divide-neutral-700">
          {/* Stat 1: Exercises */}
          <div className="flex flex-col justify-between">
            <span className="text-neutral-400 text-xs font-semibold uppercase tracking-wider">
              Exercises
            </span>
            <span className="text-3xl sm:text-4xl font-black text-[#ccff00] mt-2">
              {myWorkouts.length}
            </span>
          </div>
          {/* Stat 2: Minutes */}
          <div className="flex flex-col justify-between">
            <span className="text-neutral-400 text-xs font-semibold uppercase tracking-wider">
              Minutes
            </span>
            <span className="text-3xl sm:text-4xl font-black text-white mt-2">
              {duration}
            </span>
          </div>
          {/* Stat 3: Calories */}
          <div className="flex flex-col justify-between">
            <span className="text-neutral-400 text-xs font-semibold uppercase tracking-wider">
              Calories
            </span>
            <span className="text-3xl sm:text-4xl font-black text-white mt-2">
              {calories}
            </span>
          </div>
        </div>

        {/* Tabs: Today's Plan / Saved */}
        <div className="flex items-center gap-3 border-b border-neutral-800 pb-4">
          <button onClick={() => setActiveButton("today")} className={`  border border-neutral-800 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm transition-all cursor-pointer ${activeButton === "today" ? "bg-[#ccff00] text-black hover:opacity-90" : "bg-neutral-900 text-neutral-400 hover:text-white"}`}>
            Today&apos;s Plan ({myWorkouts.length})
          </button>
          <button onClick={() => setActiveButton("saved")} className={`  border border-neutral-800 px-5 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all cursor-pointer ${activeButton === "saved" ? "bg-[#ccff00] text-black hover:opacity-90" : "bg-neutral-900 text-neutral-400 hover:text-white"}`}>
            Saved ({savedWorkouts.length})
          </button>
        </div>

        <div className="min-h-50 bg-neutral-900 border border-dashed border-neutral-800 rounded-xl p-4 sm:p-5 space-y-4">
          {(activeButton === "today" ? myWorkouts : savedWorkouts).length > 0 ? (
            <div>
              {
                activeButton === "today" ?
                <div>
                  {myWorkouts.map(workout => <WorkoutTab workout ={workout} key={workout.id}></WorkoutTab>)}
                </div>
                :
                <div>
                  {savedWorkouts.map(workout => <WorkoutTab workout ={workout} key={workout.id}></WorkoutTab>)}
                </div>
              }
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-center py-15 px-4 space-y-4">
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-white">
                NOTHING HERE YET
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base max-w-sm">
                Browse the library and add a lift to get today moving.
              </p>
              <div className="pt-2">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center bg-[#ccff00] text-black px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity shadow-sm"
                >
                  Go to workouts
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPlanPage;
