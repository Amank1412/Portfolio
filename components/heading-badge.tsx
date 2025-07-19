import React from "react";

const HeadingBadge = ({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="inline-flex h-8 items-center justify-center rounded-[4px] border border-gray-300 dark:border-slate-500/50 bg-[linear-gradient(110deg,#ffffff,40%,#f5f5f5,60%,#ffffff)] dark:bg-[linear-gradient(110deg,#000000,40%,#444444,60%,#000000)] bg-[length:200%_100%] px-3 font-medium text-[#08090a] dark:text-slate-500 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 gap-x-1 shadow-[0_0_5px_rgba(15,23,42,0.1)] dark:shadow-[0_0_5px_rgba(255,255,255,0.3)] animate-shimmer">
      <span className="text-[#08090a] dark:text-slate-200 text-lg">{icon}</span>
      <span className="text-[#08090a] dark:text-slate-200  font-medium text-sm">
        {title}
      </span>
    </div>
  );
};

export default HeadingBadge;
