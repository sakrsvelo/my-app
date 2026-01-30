"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineHome, HiOutlineUserCircle } from "react-icons/hi2";

export default function SidebarNav() {
  const pathname = usePathname();

  const navItems = [
    { icon: <HiOutlineHome strokeWidth={2} />, label: "Home", href: "/" },
    { icon: <HiOutlineUserCircle strokeWidth={2} />, label: "About", href: "/about" },
  ];

  return (
    <nav className="sticky top-28 z-20 flex flex-col items-center gap-4 px-3 py-3 rounded-full bg-[#E5DECD] shadow-sm">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`text-2xl transition-all hover:opacity-100 cursor-pointer active:scale-90 ${
              isActive ? "text-white opacity-100" : "text-white/60 opacity-80"
            }`}
            aria-label={item.label}
          >
            {item.icon}
          </Link>
        );
      })}
    </nav>
  );
}