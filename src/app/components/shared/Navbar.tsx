import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";


const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#121212] border-b border-neutral-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center gap-2 font-black tracking-widest text-lg"
          >
            <Image
              src={logo}
              width={32}
              height={32}
              alt="FitLog Logo"
            />
            FITLOG
          </Link>
        </div>

        {/* Middle: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide">
          <Link href="/" className="text-[#ccff00] transition-colors">
            Workout
          </Link>
          <Link
            href="/my-plan"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            My Plan
          </Link>
        </nav>

        {/* Right-side Status Badges (Counters) */}
        <div className="flex items-center gap-3">
          <Link
            href="/my-plan"
            className="flex items-center gap-2 bg-[#ccff00] text-black px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-sm hover:opacity-90 transition-opacity"
          >
            <span>Plan</span>
            <span className="bg-black/20 text-black px-1.5 py-0.5 rounded-full text-[10px]">
              2
            </span>
          </Link>

          {/* Saved Badge (Outline/border only) */}
          <Link
            href="/my-plan"
            className="flex items-center gap-2 border border-neutral-700 text-white px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide hover:border-neutral-500 transition-colors"
          >
            <span>Saved</span>
            <span className="text-neutral-400 text-[10px]">0</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
