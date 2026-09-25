import SortBy from "./SortBy";
import WorkoutCard from "./WorkoutCard";
import { IWorkout } from "@/types/workout.type";

const getWorkouts = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data as IWorkout[];
};
const Workouts = async () => {
  const workouts = await getWorkouts();
  return (
    <section
      id="library"
      className="bg-[#121212] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-neutral-800"
    >
      <div className="grid grid-cols-12">
        <div className="max-w-10xl space-y-10 col-span-10">
          <div className="text-center sm:text-left space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight uppercase">
              THE LIBRARY
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base">
              Twelve lifts covering every major muscle group.
            </p>
          </div>
        </div>
        <SortBy></SortBy>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:p-6 lg:p-8">
        {workouts.map((workout: IWorkout) => {
          return <WorkoutCard key={workout.id} workout={workout} />;
        })}
      </div>
    </section>
  );
};

export default Workouts;
