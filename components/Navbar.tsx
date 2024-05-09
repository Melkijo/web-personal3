"use client";

import { ModeToggle } from "@/components/ui/Mode-toggle";
import Link from "next/link";

import { useEffect, useState } from "react";
import { MenuIcon, CloseIcon } from "./icon";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //get the current path
  const path = usePathname();

  return (
    <header className="relative z-50 px-5 pb-5 pt-7 md:px-20 max-w-[1520px] mx-auto">
      <nav className="flex items-center justify-between">
        <Link href="/">
          <div className="text-2xl font-black ">
            MEJO<span className="text-primary">DEV</span>
          </div>
        </Link>

        <div className="block ">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <MenuIcon width={40} height={40} />
          </button>
        </div>
        {isMenuOpen && (
          <div className=" fixed top-0 left-0 w-full h-screen bg-background  px-5 md:px-20 ">
            <div className="absolute right-16 top-10 z-10 ">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <CloseIcon width={60} height={60} />
              </button>
            </div>
            <ul className=" overflow-y-auto no-scrollbar w-fit mx-auto   h-full flex items-center pt-40 pb-20 flex-col gap-10 md:gap-20 text-3xl md:text-6xl font-display">
              <li>
                <Link
                  href="/"
                  className={
                    path == "/"
                      ? `text-primary`
                      : `text-white hover:text-primary`
                  }
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#portfolio"
                  className={
                    path == "/portfolio"
                      ? `text-primary`
                      : `text-white hover:text-primary`
                  }
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  Portfolio
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className={
                    path == "/about"
                      ? `text-primary`
                      : `text-white hover:text-primary`
                  }
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={
                    path == "/contact"
                      ? `text-primary`
                      : `text-white hover:text-primary`
                  }
                >
                  Contact
                </Link>
              </li>
              <li>
                <div className="text-4xl font-black mt-20">
                  MEJO<span className="text-primary">DEV</span>
                </div>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
