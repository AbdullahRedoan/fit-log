"use client";
import { WorkoutContext } from "@/app/context/WorkoutContext";
import Link from "next/link";
import { useContext } from "react";

const NavbarButtons = () => {
  const { activeNavButton, setActiveNavButton } = useContext(WorkoutContext);
  return (
    <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide">
      <Link
        onClick={() => setActiveNavButton("workout")}
        href="/"
        className={`${
            activeNavButton === "workout" ?
            "text-[#ccff00] hover:opacity-90"
            :
            "text-neutral-400 hover:text-white"
        } transition-colors`}
      >
        Workout
      </Link>
      <Link
        onClick={() => setActiveNavButton("my-plan")}
        href="/my-plan"
         className={`${
            activeNavButton === "my-plan" ?
            "text-[#ccff00] hover:opacity-90"
            :
            "text-neutral-400 hover:text-white"
        } transition-colors`}
      >
        My Plan
      </Link>
    </nav>
  );
};

export default NavbarButtons;
