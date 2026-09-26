import Image from "next/image";
import TodayButton from "../TodayButton";
import LaterButton from "../LaterButton";
import { IWorkout } from "@/types/workout.type";

interface IWorkoutDetailsPageProps {
  params: {
    id: string;
  };
}

const workoutDetails = async (id: string) => {
try{
   const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/fitlog/${id}`);
  const data = await res.json();
  return data;
 }catch{
  return [];
 }
};

const WorkoutDetailsPage = async ({ params }: IWorkoutDetailsPageProps) => {
  const { id } = await params;
  const workout : IWorkout = await workoutDetails(id);
  const {
    name,
    image,
    muscleGroups,
    equipment,
    difficulty,
    duration,
    caloriesBurned,
    sets,
    reps,
    rating,
    description,
    instructions,
  } = workout;
  return (
    <div className="bg-[#121212] text-white min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-9xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <div className="lg:col-span-6 w-full">
          <div className="w-full aspect-square sm:aspect-4/3 lg:aspect-square bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 shadow-xl relative flex items-center justify-center">
            <Image
              src={image}
              width={500}
              height={500}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight uppercase text-white font-sans">
              {name}
            </h1>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              {description}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="flex gap-2">
              {muscleGroups.map((group: string) => (
                <span
                  className="inline-block bg-[#ccff00] text-black  text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-full"
                  key={group}
                >
                  {group}
                </span>
              ))}
            </span>
          </div>

 
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden divide-y divide-neutral-800 text-sm">
            <div className="grid grid-cols-2 px-4 py-3">
              <span className="text-neutral-400 font-medium">EQUIPMENT</span>
              <span className="text-white font-semibold text-right">
                {equipment}
              </span>
            </div>
            <div className="grid grid-cols-2 px-4 py-3">
              <span className="text-neutral-400 font-medium">DIFFICULTY</span>
              <span className="text-white font-semibold text-right">
                {difficulty}
              </span>
            </div>
            <div className="grid grid-cols-2 px-4 py-3">
              <span className="text-neutral-400 font-medium">SETS</span>
              <span className="text-white font-semibold text-right">
                {sets}
              </span>
            </div>
            <div className="grid grid-cols-2 px-4 py-3">
              <span className="text-neutral-400 font-medium">REPS</span>
              <span className="text-white font-semibold text-right">
                {reps}
              </span>
            </div>
            <div className="grid grid-cols-2 px-4 py-3">
              <span className="text-neutral-400 font-medium">DURATION</span>
              <span className="text-white font-semibold text-right">
                {duration}
              </span>
            </div>
            <div className="grid grid-cols-2 px-4 py-3">
              <span className="text-neutral-400 font-medium">CALORIES</span>
              <span className="text-white font-semibold text-right">
                {caloriesBurned}
              </span>
            </div>
            <div className="grid grid-cols-2 px-4 py-3">
              <span className="text-neutral-400 font-medium">RATING</span>
              <span className="text-white font-bold text-right flex items-center justify-end gap-1">
                {rating}
              </span>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <h3 className="text-xs font-bold tracking-widest uppercase text-neutral-400">
              INSTRUCTIONS
            </h3>
            <ol className="space-y-3 text-sm text-neutral-300">
              {instructions.map((step: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-neutral-800 text-[#ccff00] font-bold text-xs flex items-center justify-center">
                    {index + 1}
                  </span>
                  <p className="mt-0.5">{step}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <TodayButton workout={workout}></TodayButton>
            <LaterButton workout = {workout}></LaterButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailsPage;
