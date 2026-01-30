"use client";

import { useState } from "react";
import { RiHeadphoneLine } from "react-icons/ri";

export default function Playlist() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex items-center justify-end">
      {/* The Tooltip Card - Positioned at top-12 (below) and right-0 (aligned right) */}
      <div 
            className={`absolute top-12 right-6 w-48 rounded-2xl bg-[#e2ddd1] p-4 shadow-sm transition-all duration-300 transform origin-top-right ${
                isHovered 
                    ? "opacity-100 translate-y-0 scale-100" 
                    : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
                }`}
    >   
        <h3 className="text-lg font-medium italic border-b border-[#52442C] pb-1 mb-2 text-[#52442C] tracking-tight">
          PLAYLIST
        </h3>
        <ul className="space-y-1 text-xs italic text-[#52442C] leading-relaxed">
          <li>01 - Littleroot Town</li>
          <li>02 - Korok Forest</li>
          <li>03 - TICTAC</li>
        </ul>
      </div>

      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e2ddd1] text-white shadow-sm cursor-pointer transition-transform hover:scale-105 active:scale-95 z-10"
        aria-label="Toggle Playlist"
      >
        <RiHeadphoneLine size={24} strokeWidth={0.5} />
      </button>
    </div>
  );
}