import { IWorkout } from "@/types/workout.type";
import Image from "next/image";
import Link from "next/link";
import { FiClock, FiStar } from "react-icons/fi";
import { IoMdFlame } from "react-icons/io";
    

const WorkoutCard = ({ workout }: { workout: IWorkout }) => {
    const {id, name, image, muscleGroups, equipment, duration, caloriesBurned, rating,} = workout;
    return (
        <Link 
  href={`/workout/${id}`}
  className="group bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-[#ccff00]/50 transition-all duration-300 flex flex-col w-full mx-auto" >
  <div className="w-full aspect-4/3 bg-neutral-950 overflow-hidden relative">
    <Image 
      src={image} 
      width={400}
      height={300}
      alt="Workout Illustration" 
      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
    />
  </div>

  {/* Card Content */}
  <div className="p-4 sm:p-5 flex flex-col grow space-y-3">
    
    {/* Category tag pill */}
    <div>
      <span className = "flex gap-2">
        {muscleGroups.map((group) => <span className="inline-block bg-[#ccff00] text-black  text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full" key={group}>{group}</span>)}
      </span>
    </div>

    {/* Workout Name */}
    <h3 className="text-base sm:text-lg font-bold tracking-wide uppercase text-white group-hover:text-[#ccff00] transition-colors line-clamp-1">
      {name}
    </h3>

    {/* Equipment Line */}
    <p className="text-neutral-400 text-xs line-clamp-1">
      {equipment}
    </p>

    {/* Stats Row with Icons */}
    <div className="pt-2 mt-auto border-t border-neutral-800 flex items-center justify-start gap-5 text-xs text-neutral-300">
      <div className="flex items-center gap-1">
        <FiClock className="w-3.5 h-3.5 text-gray-300" />
        <span>{duration} min</span>
      </div>
      <div className="flex items-center gap-1">
        <IoMdFlame className="w-3.5 h-3.5 text-gray-300" />
        <span>{caloriesBurned} kcal</span>
      </div>
      <div className="flex items-center gap-1 text-gray-300 font-semibold">
        <FiStar className="w-3.5 h-3.5 fill-current" />
        <span>{rating.toFixed(1)}</span>
      </div>
    </div>

  </div>
</Link>
    );
};

export default WorkoutCard;