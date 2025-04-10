import React from "react";
import Countdown from "./countdown";

const SectionBeginEvent = () => {
  return (
    <section className="py-20 space-y-12">
      <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-medium text-center bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text">
        The Next NTT Startup Challenge is
      </h2>
      <Countdown />
    </section>
  );
};

export default SectionBeginEvent;
