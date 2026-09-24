import React from "react";

const MyPlanPage = () => {
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Stat 1: Exercises */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 flex flex-col justify-between">
            <span className="text-neutral-400 text-xs font-semibold uppercase tracking-wider">
              Exercises
            </span>
            <span className="text-3xl sm:text-4xl font-black text-white mt-2">
              2
            </span>
          </div>
          {/* Stat 2: Minutes */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 flex flex-col justify-between">
            <span className="text-neutral-400 text-xs font-semibold uppercase tracking-wider">
              Minutes
            </span>
            <span className="text-3xl sm:text-4xl font-black text-white mt-2">
              50
            </span>
          </div>
          {/* Stat 3: Calories */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 flex flex-col justify-between">
            <span className="text-neutral-400 text-xs font-semibold uppercase tracking-wider">
              Calories
            </span>
            <span className="text-3xl sm:text-4xl font-black text-white mt-2">
              360
            </span>
          </div>
        </div>

        {/* Tabs: Today's Plan / Saved */}
        <div className="flex items-center gap-3 border-b border-neutral-800 pb-4">
          <button className="bg-[#ccff00] text-black px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm transition-all cursor-pointer">
            Today&apos;s Plan (2)
          </button>
          <button className="bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800 px-5 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all cursor-pointer">
            Saved (0)
          </button>
        </div>

        {/* Workout Cards List */}
        <div className="space-y-4">
          {/* Workout Card Item 1 */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:border-neutral-700 transition-all">
            {/* Left: Thumbnail & Info */}
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-neutral-950 rounded-lg overflow-hidden flex-shrink-0 border border-neutral-800">
                <img
                  src="/workout-placeholder.png"
                  alt="Barbell Bench Press"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <span className="inline-block bg-neutral-800 text-[#ccff00] text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full">
                  Chest
                </span>
                <h3 className="text-base sm:text-lg font-bold tracking-wide uppercase text-white">
                  BARBELL BENCH PRESS
                </h3>
                <p className="text-neutral-400 text-xs">Barbell, Bench</p>
              </div>
            </div>

            {/* Middle: Stats Row */}
            <div className="flex items-center gap-4 text-xs text-neutral-300 w-full md:w-auto justify-between md:justify-start border-t md:border-t-0 pt-3 md:pt-0 border-neutral-800">
              <div className="flex items-center gap-1">
                <span className="text-neutral-400">Duration:</span>
                <span className="font-semibold text-white">25 min</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-neutral-400">Calories:</span>
                <span className="font-semibold text-white">180 kcal</span>
              </div>
              <div className="flex items-center gap-1 text-[#ccff00] font-semibold">
                <span>★ 4.8</span>
              </div>
            </div>

            {/* Right: Action Buttons */}
            <div className="flex items-center gap-2 w-full md:w-auto justify-end border-t md:border-t-0 pt-3 md:pt-0 border-neutral-800">
              <button className="inline-flex items-center gap-1.5 bg-neutral-800 hover:bg-neutral-700 text-white px-3 py-2 rounded-md text-xs font-semibold transition-colors cursor-pointer">
                <span>View Details</span>
              </button>
              <button className="inline-flex items-center gap-1.5 bg-[#ccff00] hover:opacity-90 text-black px-3 py-2 rounded-md text-xs font-bold transition-opacity cursor-pointer">
                <span>Mark as Done</span>
              </button>
              <button
                className="p-2 bg-neutral-800 hover:bg-red-500/20 hover:text-red-400 text-neutral-400 rounded-md transition-colors cursor-pointer"
                title="Remove"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Workout Card Item 2 */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:border-neutral-700 transition-all">
            {/* Left: Thumbnail & Info */}
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-neutral-950 rounded-lg overflow-hidden flex-shrink-0 border border-neutral-800">
                <img
                  src="/workout-placeholder.png"
                  alt="Russian Twist"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <span className="inline-block bg-neutral-800 text-[#ccff00] text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full">
                  Core
                </span>
                <h3 className="text-base sm:text-lg font-bold tracking-wide uppercase text-white">
                  RUSSIAN TWIST
                </h3>
                <p className="text-neutral-400 text-xs">Medicine Ball</p>
              </div>
            </div>

            {/* Middle: Stats Row */}
            <div className="flex items-center gap-4 text-xs text-neutral-300 w-full md:w-auto justify-between md:justify-start border-t md:border-t-0 pt-3 md:pt-0 border-neutral-800">
              <div className="flex items-center gap-1">
                <span className="text-neutral-400">Duration:</span>
                <span className="font-semibold text-white">25 min</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-neutral-400">Calories:</span>
                <span className="font-semibold text-white">180 kcal</span>
              </div>
              <div className="flex items-center gap-1 text-[#ccff00] font-semibold">
                <span>★ 4.8</span>
              </div>
            </div>

            {/* Right: Action Buttons */}
            <div className="flex items-center gap-2 w-full md:w-auto justify-end border-t md:border-t-0 pt-3 md:pt-0 border-neutral-800">
              <button className="inline-flex items-center gap-1.5 bg-neutral-800 hover:bg-neutral-700 text-white px-3 py-2 rounded-md text-xs font-semibold transition-colors cursor-pointer">
                <span>View Details</span>
              </button>
              <button className="inline-flex items-center gap-1.5 bg-[#ccff00] hover:opacity-90 text-black px-3 py-2 rounded-md text-xs font-bold transition-opacity cursor-pointer">
                <span>Mark as Done</span>
              </button>
              <button
                className="p-2 bg-neutral-800 hover:bg-red-500/20 hover:text-red-400 text-neutral-400 rounded-md transition-colors cursor-pointer"
                title="Remove"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPlanPage;
