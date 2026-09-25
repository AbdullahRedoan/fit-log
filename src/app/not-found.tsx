import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="bg-[#121212] text-white min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">

        <div>
          <span className="inline-block bg-neutral-800 text-[#ccff00] text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full">
            Error 404
          </span>
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight uppercase">
            Page Not Found
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base">
            Looks like this lift doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
          </p>
        </div>
        <div className="pt-2">
          <Link 
            href="/" 
            className="inline-flex items-center justify-center bg-[#ccff00] text-black px-6 py-3.5 rounded-md text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity shadow-sm"
          >
            Back to Workouts
          </Link>
        </div>

      </div>
    </div>
  );
}