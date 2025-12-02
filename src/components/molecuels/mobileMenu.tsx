"use client";

import { useEffect, useState } from "react";
import MenuIcon from "../atoms/menuIcon";
import CloseIcon from "../atoms/closeIcon";
import ThemeToggle from "./ThemeToggle";

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
        <div className="h-screen absolute inset-0 bg-[#ffffff] z-1">
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
                <div>About</div>
                <div>Work</div>
                <div>Testimonials</div>
                <div>Contact</div>
              </div>
              <div className="flex flex-col p-4 gap-4">
                <div className="flex justify-between items-center">
                  <div>Switch Theme</div>
                  <ThemeToggle />
                </div>
                <div>
                  <button className="py-[6px] px-4 bg-foreground text-secondary-background rounded-[12px] w-full body2-medium">
                    Download CV
                  </button>
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
