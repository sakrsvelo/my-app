"use client";

import { HiOutlineChevronUp } from "react-icons/hi2";

export default function BackToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-[#52442C] text-white shadow-lg transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
      aria-label="Back to top"
    >
      <HiOutlineChevronUp className="text-2xl stroke-[2.5]" />
    </button>
  );
}