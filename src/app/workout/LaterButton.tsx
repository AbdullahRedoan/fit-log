import { IWorkout } from '@/types/workout.type';
import React from 'react';
import { FaBookmark } from 'react-icons/fa6';

const LaterButton = ({workout}: {workout: IWorkout}) => {
    return (
        <button className="inline-flex items-center justify-center gap-2 border border-neutral-700 text-white px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:border-neutral-500 hover:bg-neutral-900 transition-all cursor-pointer">
              <FaBookmark className="w-4 h-4" />
              <span>Save for later</span>
            </button>
    );
};

export default LaterButton;