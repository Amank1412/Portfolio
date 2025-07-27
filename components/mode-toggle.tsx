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
    <div>
      <button
        type="button"
        className={cn(
          "relative flex items-center justify-center w-10 h-10 bg-transparent"
        )}
        aria-label="Toggle theme"
        title={`${theme === "dark" ? "light" : "dark"} mode`}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <MoonIcon
          className={cn(
            "size-[1.5rem]",
            theme === "dark" ? "text-white" : "text-gray-700"
          )}
        />
      </button>
    </div>
  );
};

ModeToggle.displayName = "ModeToggle";
