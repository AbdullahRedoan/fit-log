import Banner from "./components/homepage/Banner";
import Navbar from "./components/shared/Navbar";
import Workouts from "./components/workouts/Workouts";

export default function Home() {
  return (
    <main>
      <Banner></Banner>
      <Workouts></Workouts>
    </main>
  );
}
