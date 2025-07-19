import HeadingBadge from "@/components/heading-badge";
import { Hand } from "lucide-react";

export function IntroSection() {
  return (
    <section
      id="intro"
      className="w-full flex flex-col items-start justify-center"
    >
      <div className="space-y-6 ">
        <HeadingBadge
          title="Introduction"
          icon={<Hand size={14} color="#06B6D4" />}
        />

        <article className="space-y-5 sm:space-y-6">
          <h1 className="text-5xl font-bold tracking-tight leading-tight">
            <span className="text-[#08090a] dark:text-slate-200">
              Hi, I&apos;m Aman
            </span>
          </h1>

          <p className="text-xl sm:text-2xl font-medium text-[#737373] dark:text-[#A1A1AA] max-w-2xl">
            A Full Stack Developer passionate about crafting seamless digital
            experiences
          </p>

          <p className="text-sm sm:text-base font-normal text-[#737373] dark:text-[#A1A1AA] max-w-2xl">
            I specialize in building web apps with{" "}
            <span className="text-[#08090a] dark:text-slate-100 font-semibold">
               React, JavaScript, Tailwind CSS, Node.js and more.
            </span>{" "}
            Always excited to tackle new challenges where I can create value and
            grow as a coder. Let&apos;s connect if you&apos;ve got a project
            that could use my skills!
          </p>
        </article>
        <div className="mt-4">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md shadow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Resume
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="inline-block">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4m-8 8h8" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
