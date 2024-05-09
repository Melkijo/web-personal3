"use client";

import { ModeToggle } from "@/components/ui/Mode-toggle";
import Link from "next/link";

import { useEffect, useState } from "react";
import { MenuIcon, CloseIcon } from "./icon";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //get the current path
  const path = window.location.pathname;

  return (
    <header className="relative z-50 px-5 pb-5 pt-7 md:px-20 max-w-[1520px] mx-auto">
      <nav className="flex items-center justify-between">
        <div className="text-2xl font-black">
          MEJO<span className="text-primary">DEV</span>
        </div>

        <div className="block ">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <MenuIcon width={40} height={40} />
          </button>
        </div>
        {isMenuOpen && (
          <div className=" fixed top-0 left-0 w-full h-screen bg-background  px-5 md:px-20 py-10">
            <div className="flex justify-end ">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <CloseIcon width={40} height={40} />
              </button>
            </div>
            <ul className=" overflow-y-hidden h-full flex items-center justify-center  flex-col gap-10 md:gap-20 text-3xl md:text-6xl font-display">
              <li>
                <Link
                  href="/"
                  className={
                    path == "/"
                      ? `text-green-300`
                      : `text-white hover:text-green-300`
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
                      ? `text-green-300`
                      : `text-white hover:text-green-300`
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
                      ? `text-green-300`
                      : `text-white hover:text-green-300`
                  }
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className={
                    path == "/contact"
                      ? `text-green-300`
                      : `text-white hover:text-green-300`
                  }
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
