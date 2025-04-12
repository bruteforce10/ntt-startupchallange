"use client";

import { cn } from "@/lib/utils";

export default function Hero({
  children,
  videoUrl,
  className,
  classNameContainer,
}) {
  return (
    <section>
      <div
        className={cn(
          classNameContainer,
          "relative h-[400px] sm:min-h-[calc(80vh-3.5rem)] z-[2] flex flex-col justify-center w-full overflow-hidden"
        )}
      >
        <div className="bg-linear-to-b from-blue-ntt-900 to-black/50 absolute top-0 left-0 w-full h-full z-[3]"></div>
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoUrl} type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div
          className={cn(
            "relative max-sm:space-y-8 space-y-12 mx-auto z-10 container px-4",
            className
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
