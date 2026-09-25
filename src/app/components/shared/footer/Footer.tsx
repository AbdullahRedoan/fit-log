import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/logo.png'

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white border-t border-neutral-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-9xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 font-black tracking-widest text-base sm:text-lg">
            <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-md flex items-center justify-center text-black font-extrabold text-xs sm:text-sm">
                <Image
                src={logo}
                width={300}
                height={300}
                alt='Logo'
                />
            </span>
            FITLOG
          </Link>
        </div>
        <p className="text-neutral-500 text-xs text-center sm:text-left">
          © {new Date().getFullYear()} FitLog - Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}