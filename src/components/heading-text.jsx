import { cn } from "@/lib/utils";
import React from "react";

const HeadingText = ({ text, className, classNameBorder }) => {
  return (
    <div className={cn("text-center mb-16", className)}>
      <h2 className="text-4xl md:text-5xl font-bold mb-2 leading-normal">
        {text}
      </h2>
      <div
        className={cn("h-1 w-24 bg-blue-500 mx-auto", classNameBorder)}
      ></div>
    </div>
  );
};

export default HeadingText;
