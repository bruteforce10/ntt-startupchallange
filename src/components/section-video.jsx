"use client";
import { useState, useEffect } from "react";

export function VideoSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="text-white pt-16 md:pt-28">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative w-full pb-[56.25%] h-0 rounded-lg overflow-hidden">
            {isMounted && (
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/-XJw3OdjF64?si=nXYnwzGFpkTjV8Bt"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            )}
          </div>

          <div className="mt-6 text-center text-gray-300">
            <p>
              Watch highlights from our previous NTT Startup Challenge event
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
