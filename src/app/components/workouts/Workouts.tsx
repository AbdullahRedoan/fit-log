import WorkoutCard from './WorkoutCard';
import { IWorkout } from '@/types/workout.type';

const getWorkouts = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await res.json();
    return data as IWorkout[];
}
const Workouts = async () => {
    const workouts =await getWorkouts();
    return (
        <div>
            {workouts.map((workout: IWorkout) => {
                return (
                    <WorkoutCard key={workout.id} workout={workout} />
                )
            })}
        </div>
    );
};

export default Workouts;