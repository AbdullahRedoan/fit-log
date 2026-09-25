import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import NavbarButtons from "./NavbarButtons";
import Badges from "./Badges";


const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#121212] border-b border-neutral-800 text-white">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
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
        <NavbarButtons></NavbarButtons>
        <Badges></Badges>        
      </div>
    </header>
  );
};

export default Navbar;
