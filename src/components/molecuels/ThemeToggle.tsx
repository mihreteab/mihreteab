// components/ThemeToggle.tsx
"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import LightModeIcon from "../atoms/lightModeIcon";
import DarkModeIcon from "../atoms/darkModeIcon";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid hydration mismatch

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex justify-between md:justify-center p-[6px] rounded-[8px] h-[36px] w-full md:w-[36px] cursor-pointer"
    >
      <span className="md:hidden">Switch Theme</span>
      {theme === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
    </button>
  );
};

export default ThemeToggle;
