"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarButtons = () => {
  const pathName = usePathname();
  return (
    <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide">
      <Link
        href="/"
        className={`${
            pathName === '/' ?
            "text-[#ccff00] hover:opacity-90 bg-[#ccff0030] py-1 px-2 rounded-2xl"
            :
            "text-neutral-400 hover:text-white"
        } transition-colors`}
      >
        Workout
      </Link>
      <Link
        href="/my-plan"
         className={`${
            pathName === "/my-plan" ?
            "text-[#ccff00] hover:opacity-90 bg-[#ccff0030] py-1 px-2 rounded-2xl"
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
