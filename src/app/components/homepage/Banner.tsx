import Image from "next/image";
import bannerImage from "@/assets/banner.png"
import { FaArrowDown } from "react-icons/fa6";

const Banner = () => {
  return (
    <section className="bg-[#121212] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-neutral-800 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center aspect-video  bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800">
        <div className="lg:col-span-7 space-y-4">
          <span className="text-[#ccff00] text-xs font-bold tracking-widest uppercase">
            WORKOUT LIBRARY
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase leading-none font-sans">
            TRAIN WITH INTENT. <br className="hidden sm:inline" />
            LOG EVERY SET.
          </h1>

          <p className="text-neutral-400 text-sm sm:text-base max-w-xl font-normal leading-relaxed">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <div className="pt-2">
            <a
              href="#library"
              className="inline-flex items-center gap-2 bg-[#ccff00] text-black px-6 py-3 rounded-md text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity shadow-sm"
            >
              <span>Browse Workouts</span>
              <FaArrowDown />
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="w-full max-w-md  flex items-center justify-center relative shadow-lg">
            <Image
              src={bannerImage}
              width={500}
              height={500}
              alt="Train with intent hero illustration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
