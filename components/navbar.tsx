"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Menu, X } from "lucide-react";
import MobileNav from "./mobile-nav";
import { ModeToggle } from "@/components/mode-toggle";

interface NavbarProps {
  sections?: {
    id: string;
    label: string;
  }[];
}

type SectionPosition = {
  id: string;
  top: number;
  bottom: number;
  height: number;
};

export function Navbar({
  sections = [
    { id: "intro", label: "Intro" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" },
  ],
}: NavbarProps) {
  const { theme } = useTheme();
  const [activeSection, setActiveSection] = useState("intro");
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionPositions = sections
        .map((section) => {
          const element = document.getElementById(section.id);
          if (!element) return null;

          const rect = element.getBoundingClientRect();
          return {
            id: section.id,
            top: rect.top + window.scrollY,
            bottom: rect.bottom + window.scrollY,
            height: rect.height,
          };
        })
        .filter((section): section is SectionPosition => section !== null);

      if (sectionPositions.length === 0) return;

      const viewportTop = window.scrollY;
      const viewportCenter = viewportTop + window.innerHeight / 2;

      const sortedSections = [...sectionPositions].sort((a, b) => {
        const aCenter = a.top + a.height / 2;
        const bCenter = b.top + b.height / 2;
        return (
          Math.abs(aCenter - viewportCenter) -
          Math.abs(bCenter - viewportCenter)
        );
      });

      const mostVisibleSection = sortedSections[0];
      if (mostVisibleSection && mostVisibleSection.id !== activeSection) {
        setActiveSection(mostVisibleSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections, activeSection, mounted]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!mounted) return;
    const nav = e.currentTarget;
    const rect = nav.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

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

    setActiveSection(id);
  };

  if (!mounted) {
    return (
      <nav
        className={cn(
          "fixed top-3 sm:top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between w-[95%] max-w-[670px] py-2 px-4 rounded-sm transition-all duration-300 overflow-hidden",
          "bg-white/60 dark:bg-[#0a0a0a]/60 backdrop-blur-sm border border-gray-200/60 dark:border-gray-500/10"
        )}
      >
        <div className="flex-shrink-0 relative">
          <div className="w-9 h-9 rounded-full bg-[#08090a] dark:bg-slate-600"></div>
        </div>
        <div className="hidden sm:flex items-center space-x-1">
          {sections.map((section) => (
            <div key={section.id} className="px-3 py-1.5 text-sm rounded-full" />
          ))}
        </div>
        <div className="sm:hidden relative z-50 w-10 h-10"></div>
      </nav>
    );
  }

  return (
    <>
      <nav
        className={cn(
          "fixed top-3 sm:top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between w-[95%] max-w-[670px] py-2 px-4 rounded-sm transition-all duration-300 overflow-hidden",
          scrolled
            ? "bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border border-gray-200/50 dark:border-gray-500/10 shadow-lg"
            : "bg-white/60 dark:bg-[#0a0a0a]/60 backdrop-blur-sm border border-gray-200/60 dark:border-gray-500/10"
        )}
        onMouseMove={handleMouseMove}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background:
              theme === "dark"
                ? `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(100, 116, 139, 0.15), transparent 40%)`
                : `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(8, 9, 10, 0.15), transparent 40%)`,
          }}
        />

        <div className="absolute inset-0 rounded-sm opacity-20 blur-sm">
          <div className="absolute inset-px rounded-sm border border-slate-200/20" />
        </div>

        <div className="flex-shrink-0 relative">
          <ModeToggle />
        </div>

        <div className="flex items-center space-x-1 w-full justify-end">
          <div className="hidden sm:flex items-center space-x-1">
            {sections.map((section) => (
              <Link
                key={section.id}
                href={`#${section.id}`}
                className={cn(
                  "px-3 py-1.5 text-sm rounded-full transition-all duration-300 relative overflow-hidden",
                  activeSection === section.id
                    ? "text-black dark:text-white bg-gray-100 dark:bg-[#191a1a] font-normal"
                    : "text-[#737373] dark:text-[#A1A1AA] hover:text-black dark:hover:text-white font-normal"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section.id);
                }}
              >
                {activeSection === section.id && (
                  <div className="absolute inset-0 opacity-20">
                    <div
                      className={cn(
                        "absolute inset-0 bg-gradient-to-r from-transparent via-[#08090a]/30 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-slate-500/30 dark:to-transparent"
                      )}
                      style={{ animation: "var(--animate-shine)" }}
                    />
                  </div>
                )}
                {section.label}
              </Link>
            ))}
          </div>
        </div>

        <button
          className="sm:hidden relative z-50 w-10 h-10 flex items-center justify-center cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-[#08090a] dark:text-white transition-transform duration-200 transform rotate-0 hover:rotate-90" />
          ) : (
            <Menu className="w-6 h-6 text-[#08090a] dark:text-white transition-transform duration-200 transform hover:scale-110" />
          )}
        </button>
      </nav>
      <MobileNav
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        sections={sections}
      />
    </>
  );
}
