import Banner from "./components/homepage/Banner";
import Footer from "./components/shared/footer/Footer";
import Workouts from "./components/workouts/Workouts";

export default function Home() {
  return (
    <main>
      <Banner></Banner>
      <Workouts></Workouts>
      <Footer></Footer>
    </main>
  );
}
