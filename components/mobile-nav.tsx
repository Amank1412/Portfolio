"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

interface MobileNavProps {
  isOpen?: boolean;
  onClose?: () => void;
  sections?: {
    id: string;
    label: string;
  }[];
}

const MobileNav = ({
  isOpen = false,
  onClose,
  sections = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ],
}: MobileNavProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (id: string) => {
    if (!mounted) return;
    const element = document.getElementById(id);
    if (!element) return;

    const navbarHeight = 80;
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    onClose?.();
  };

  // Render nothing during SSR to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-black/60 backdrop-blur-sm z-40 sm:hidden transition-all duration-500 ease-in-out",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Menu */}
      <div
        className={cn(
          "fixed top-20 right-3 h-fit w-72 rounded-sm z-50 shadow-2xl sm:hidden flex flex-col overflow-hidden",
          "bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border border-gray-200/50 dark:border-gray-500/10",
          "transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
          isOpen
            ? "translate-x-0 opacity-100 scale-100"
            : "translate-x-8 opacity-0 scale-95 pointer-events-none"
        )}
      >
        {/* Menu Items */}
        <div className="flex-1 px-3 py-4">
          <div className="flex flex-col space-y-1">
            {sections.map((section, i) => (
              <Link
                key={section.id}
                href={`#${section.id}`}
                className={cn(
                  "group flex items-center justify-between px-4 py-3.5 text-base rounded-sm relative overflow-hidden",
                  "text-slate-600 dark:text-slate-200",
                  "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section.id);
                }}
                style={{
                  transitionDelay: `${i * 75}ms`,
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen
                    ? "translateX(0) scale(1)"
                    : "translateX(2rem) scale(0.95)",
                }}
              >
                {/* Background Highlight */}
                <div
                  className={cn(
                    "absolute inset-0 w-full h-full rounded-sm transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    "opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100",
                    "bg-gray-100 dark:bg-[#191a1a]"
                  )}
                />

                {/* Shine Effect */}
                <div
                  className={cn(
                    "absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out overflow-hidden",
                    "opacity-0 group-hover:opacity-20"
                  )}
                >
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-r from-transparent via-[#08090a]/30 to-transparent dark:from-transparent dark:via-white/30 dark:to-transparent"
                    )}
                    style={{ animation: "var(--animate-shine)" }}
                  />
                </div>

                {/* Content */}
                <span className="relative z-10 font-normal transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] text-[#737373] dark:text-[#A1A1AA] group-hover:text-black dark:group-hover:text-white">
                  {section.label}
                </span>

                {/* Icon */}
                <ChevronRight
                  className={cn(
                    "relative z-10 w-4 h-4",
                    "text-slate-400 dark:text-white",
                    "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    "group-hover:text-slate-900 dark:group-hover:text-slate-100",
                    "transform group-hover:translate-x-1"
                  )}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
