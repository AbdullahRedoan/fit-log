import Library from "./Library";
import SortBy from "./SortBy";
import { IWorkout } from "@/types/workout.type";

const getWorkouts = async () => {
 try{
   const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/fitlog`);
  const data = await res.json();
  return data as IWorkout[];
 }catch{
  return [];
 }
};
const Workouts = async () => {
  const workouts = await getWorkouts();
  return (
    <section
      id="library"
      className="bg-[#121212] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-neutral-800"
    >
      <div className="grid grid-cols-1 gap-3 md:grid-cols-8 lg:grid-cols-12">
        <div className="max-w-10xl space-y-10 md:col-span-6 lg:col-span-10">
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
      <Library workoutsData = {workouts}></Library>
    </section>
  );
};

export default Workouts;
