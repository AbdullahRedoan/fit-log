import { IWorkout } from "@/types/workout.type";
import Image from "next/image";
import Link from "next/link";
import { FiClock, FiStar } from "react-icons/fi";
import { IoMdFlame } from "react-icons/io";
import TabButtons from "./TabButtons";

const WorkoutTab = ({ workout }: { workout: IWorkout }) => {
  const {
    id,
    name,
    image,
    muscleGroups,
    equipment,
    duration,
    caloriesBurned,
    rating,
  } = workout;
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:border-neutral-700 transition-all">
      {/* Left: Thumbnail & Info */}
      <div className="flex items-center gap-4 w-full md:w-auto">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-neutral-950 rounded-lg overflow-hidden shrink-0 border border-neutral-800">
          <Image
            src={image}
            width={300}
            height={300}
            alt="Barbell Bench Press"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-1">
          {muscleGroups.map((item) => (
            <span
              key={item}
              className="inline-block bg-neutral-800 text-[#ccff00] text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full"
            >
              {item}
            </span>
          ))}
          <h3 className="text-base sm:text-lg font-bold tracking-wide uppercase text-white">
            {name}
          </h3>
          <p className="text-neutral-400 text-xs">{equipment}</p>
          <div className="pt-2 mt-auto flex items-center justify-start gap-5 text-xs text-neutral-300">
            <div className="flex items-center gap-1">
              <FiClock className="w-3.5 h-3.5 text-[#ccff00]" />
              <span>{duration} min</span>
            </div>
            <div className="flex items-center gap-1">
              <IoMdFlame className="w-3.5 h-3.5 text-[#ccff00]" />
              <span>{caloriesBurned} kcal</span>
            </div>
            <div className="flex items-center gap-1 text-gray-300 font-semibold">
              <FiStar className="w-3.5 h-3.5 fill-current text-[#ccff00]" />
              <span>{rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
      </div>
      {/* Right: Action Buttons */}
      <div className="flex items-center gap-2 w-full md:w-auto justify-end border-t md:border-t-0 pt-3 md:pt-0 border-neutral-800">
        <Link href={`/workout/${id}`}>
          <button className="inline-flex items-center gap-1.5 bg-neutral-800 hover:bg-neutral-700 text-white px-3 py-2 rounded-md text-xs font-semibold transition-colors cursor-pointer">
            <span>View Details</span>
          </button>
        </Link>
        <TabButtons workout={workout}></TabButtons>
      </div>
    </div>
  );
};

export default WorkoutTab;
