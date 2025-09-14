"use client";
import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navItems } from "@/data";

export const FloatingNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 z-50 -translate-x-1/2 w-[95vw] max-w-2xl z-[10000]   ">
      <div className="flex items-center justify-between px-4 py-2 bg-[#0F1229] rounded-[12px] shadow-lg">
        <Link href="/">
          <span className="text-white font-bold text-lg">MyPortfolio</span>
        </Link>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"}
            />
          </svg>
        </button>
        <ul
          className={cn(
            "flex-1 md:flex md:items-center md:justify-end gap-2 md:gap-4 transition-all duration-300",
            open
              ? "block absolute top-14 left-0 w-full bg-[#0F1229] rounded-b-2xl py-4 md:static md:bg-transparent md:rounded-none"
              : "hidden md:flex"
          )}
        >
          {navItems.map((item) => (
            <li key={item.name} className="mx-2">
              <Link
                href={item.link}
                className="px-4 py-2 rounded-full text-white hover:bg-[#23264a] transition block text-center"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default FloatingNav;
