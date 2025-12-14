"use client";
import React from "react";
import HeadingText from "./heading-text";

const SectionCoverLink = ({
  title,
  videoUrl = "https://www.youtube.com/embed/v5FNZHFIJco?si=zS5TIODbSvQFR7Sn",
}) => {
  return (
    <section className="pt-16 md:pt-28 px-4 container mx-auto">
      <HeadingText text={title} className="text-center" />
      <div className="w-full mx-auto rounded-lg overflow-hidden">
        <div className="relative w-full aspect-video">
          <iframe
            src={videoUrl}
            title={title || "NTT Startup Challenge 2025 Recap Video"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionCoverLink;
