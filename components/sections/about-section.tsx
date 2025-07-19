import HeadingBadge from "@/components/heading-badge";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { User } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="w-full pt-10 flex flex-col items-start justify-start gap-y-8"
    >
      <div className="flex flex-col items-start justify-start gap-5">
        <HeadingBadge title="About Me" icon={<User size={14} />} />
        <div className="space-y-2">
          <h3 className="text-3xl font-semibold">
            Discover My{" "}
            <span className="text-[#08090a] dark:text-emerald-500">Story</span>
          </h3>
          <p className="text-[#737373] dark:text-[#A1A1AA] text-sm">
            Learn about my journey, experience, and what drives me as a
            developer.
          </p>
        </div>
      </div>

      <SpotlightCard
        gradientColor="rgba(34, 197, 94, 0.1)"
        lightGradientColor="rgba(8, 9, 10, 0.1)"
        spotlightSize={400}
        disableScale={true}
        className="p-6 rounded-sm border border-gray-200/80 dark:border-gray-800/50 bg-white dark:bg-[#0a0a0a] hover:border-gray-900/30 dark:hover:border-emerald-500/30 transition-all duration-300 w-full"
      >
        <div className="space-y-6">
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-[#08090a] dark:text-white flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-gray-900 dark:bg-emerald-500"></span>
              Who I Am
            </h4>
            <p className="text-sm text-[#737373] dark:text-[#A1A1AA] leading-relaxed">
              I&apos;m a passionate full-stack developer with a keen eye for
              design and a love for creating seamless user experiences. With
              over 2+ years of experience in full-stack development, I&apos;ve
              worked on a variety of projects ranging from small business
              websites to complex enterprise applications.
            </p>
            <p className="text-sm text-[#737373] dark:text-[#A1A1AA] leading-relaxed">
              My approach combines technical expertise with creative
              problem-solving, ensuring that every project I work on is not only
              functional but also visually appealing and user-friendly.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-medium text-[#08090a] dark:text-white flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-gray-900 dark:bg-emerald-500"></span>
              My Journey
            </h4>
            <p className="text-sm text-[#737373] dark:text-[#A1A1AA] leading-relaxed">
              My tech journey began with a YouTube video titled &quot;My journey
              from nothing to Google&quot; that sparked my curiosity. Though I
              had basic computer science knowledge, software development was new
              territory. Web development seemed like the perfect entry point,
              and what started as simple exploration quickly became a passion.
              Now I&apos;m constantly learning new technologies and building
              solutions that make a difference.
            </p>
            <p className="text-sm text-[#737373] dark:text-[#A1A1AA] leading-relaxed">
              Throughout my career, I&apos;ve had the opportunity to work with
              amazing teams and clients, each project adding to my skills and
              experience. I&apos;m particularly proud of my work on Artifact UI,
              which is a UI component library.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-medium text-[#08090a] dark:text-white flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-gray-900 dark:bg-emerald-500"></span>
              Beyond Coding
            </h4>
            <p className="text-sm text-[#737373] dark:text-[#A1A1AA] leading-relaxed">
              Away from the keyboard, I enjoy playing and watching cricket,
              following football matches, and watching movies. My biggest
              passion is Anime, which inspires my creativity and keeps me
              entertained.
            </p>
            <p className="text-sm text-[#737373] dark:text-[#A1A1AA] leading-relaxed">
              I&apos;m also passionate about mentoring and sharing knowledge. I
              regularly contribute to open-source projects and occasionally
              write technical articles on my blog.
            </p>
          </div>
        </div>
      </SpotlightCard>
    </section>
  );
}
