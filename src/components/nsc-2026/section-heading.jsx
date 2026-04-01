import React from "react";
import { cn } from "@/lib/utils";

export function SectionHeading2026({
  title,
  subtitle,
  className
}) {
  return (
    <div className={cn("flex flex-col items-center justify-center space-y-2 mb-16 text-center", className)}>
      {subtitle && (
        <span className="text-blue-ntt-200 uppercase tracking-[10px] text-sm font-semibold">
          {subtitle}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
        {title}
      </h2>
    </div>
  );
}
