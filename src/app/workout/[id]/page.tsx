import Image from "next/image";
import { FaCalendarPlus } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";

interface IWorkoutDetailsPageProps {
  params: {
    id: string;
  };
}

const workoutDetails = async (id: string) => {
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
  const data = await res.json();
  return data;
};

const WorkoutDetailsPage = async ({ params }: IWorkoutDetailsPageProps) => {
  const { id } = await params;
  const workout = await workoutDetails(id);
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
        {/* Left Side — Visual/Media (Two-column layout matching design) */}
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

        {/* Right Side — Sections */}
        <div className="lg:col-span-6 space-y-6">
          {/* Title & Subtitle/Description */}
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight uppercase text-white font-sans">
              {name}
            </h1>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              {description}
            </p>
          </div>

          {/* Category Tags */}
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

          {/* Key Specs Table / Panel */}
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

          {/* Instructions Section */}
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

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            {/* Primary Button */}
            <button className="inline-flex items-center justify-center gap-2 bg-[#ccff00] text-black px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity shadow-sm cursor-pointer">
              <FaCalendarPlus className="w-4 h-4 stroke-3" />
              <span>Add to today&apos;s plan</span>
            </button>

            <button className="inline-flex items-center justify-center gap-2 border border-neutral-700 text-white px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:border-neutral-500 hover:bg-neutral-900 transition-all cursor-pointer">
              <FaBookmark className="w-4 h-4" />
              <span>Save for later</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailsPage;
