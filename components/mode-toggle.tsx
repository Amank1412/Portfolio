"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";
import { MoonIcon } from "lucide-react";

export const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="fixed bottom-5 right-5 w-[1.2rem] h-[1.2rem]" />;
  }

  return (
    <div className="">
      <button
        type="button"
        className={cn(
          "relative flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-ring/50 bg-transparent hover:bg-gray-100 dark:hover:bg-[#191a1a] group"
        )}
        aria-label="Toggle theme"
        title={`${theme === "dark" ? "light" : "dark"} mode`}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 group-hover:scale-110">
          <MoonIcon
            className={cn(
              "size-[1.5rem] transition-all duration-500 transform",
              theme === "dark"
                ? "text-white rotate-0 scale-100 animate-toggle"
                : "text-gray-700 rotate-0 scale-100 animate-toggle"
            )}
          />
        </span>
      </button>
    </div>
  );
};

ModeToggle.displayName = "ModeToggle";
