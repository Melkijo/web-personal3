"use client";

import { ModeToggle } from "@/components/ui/Mode-toggle";
import Link from "next/link";
export default function Navbar() {
  return (
    <header className="px-20 pt-10 relative z-10">
      <nav className="flex justify-between items-center">
        <div className="font-black text-2xl">
          MEJO<span className="text-primary">DEV</span>
        </div>
        <ul className="flex  gap-6 text-base font-semibold">
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
        </ul>
        <div>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
