"use client";

import { useEffect, useState } from "react";
import MenuIcon from "../atoms/menuIcon";
import CloseIcon from "../atoms/closeIcon";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import DownloadButton from "./downloadButton";

const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleOpenMenu = () => {
    setShowMenu(true);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [showMenu]);

  return (
    <div className="flex justify-center items-center md:hidden">
      <button onClick={handleOpenMenu}>
        <MenuIcon />
      </button>
      {showMenu && (
        <div className="h-screen absolute inset-0 bg-[#ffffff] dark:bg-[#000000] z-1">
          <div
            onClick={handleCloseMenu}
            className="absolute flex justify-end inset-0 bg-foreground/[.1] dark:bg-[#F9FAFB]/[.1] backdrop-blur-2xl overflow-hidden"
          >
            <div
              className="w-[80%] bg-[#ffffff] dark:bg-[#030712]"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div className="p-4 flex justify-between">
                <div className="heading-h3-bold text-foreground">{"<SS/>"}</div>
                <button onClick={handleCloseMenu}>
                  <CloseIcon />
                </button>
              </div>
              <div className="flex flex-col p-4 gap-4 border-t border-b border-gray-100 dark:border-[#1F2937] text-left body2-medium text-secondary-foreground">
                <Link href="#about" onClick={handleCloseMenu}>
                  About
                </Link>
                <Link href="#works" onClick={handleCloseMenu}>
                  Work
                </Link>
                <Link href="#testimonials" onClick={handleCloseMenu}>
                  Testimonial
                </Link>
                <Link href="#contact" onClick={handleCloseMenu}>
                  Contact
                </Link>
              </div>
              <div className="flex flex-col p-4 gap-4">
                <div className="flex justify-between items-center">
                  <div>Switch Theme</div>
                  <ThemeToggle />
                </div>
                <div>
                  {/* <button className="py-[6px] px-4 bg-foreground text-secondary-background rounded-[12px] w-full body2-medium">
                    Download CV
                  </button> */}
                  <DownloadButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
