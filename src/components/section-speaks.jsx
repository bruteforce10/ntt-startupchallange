"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import HeadingText from "./heading-text";
import { SectionHeading2026 } from "./nsc-2026/section-heading";
import EachUtils from "@/utils/eachUtils";
import { SPEAK_CONTENT } from "@/constant/speaks-content";
import Autoplay from "embla-carousel-autoplay";

const SpeaksSection = ({ is2026 = false }) => {
  const autoplay = React.useRef(
    Autoplay({ delay: 10000, stopOnInteraction: false }),
  );

  const stopAutoplay = React.useCallback(() => {
    autoplay.current?.stop();
  }, []);

  return (
    <div className="md:pt-28 pt-16 ">
      {is2026 ? (
        <SectionHeading2026 title="Our Community Speaks" />
      ) : (
        <HeadingText text={"Our Community Speaks"} />
      )}
      <Carousel
        plugins={[autoplay.current]}
        className="lg:max-w-6xl max-lg:max-w-2xl px-4 container mx-auto"
      >
        <CarouselContent>
          <EachUtils
            of={SPEAK_CONTENT}
            render={(item, index) => (
              <CarouselItem key={index}>
                <div className="bg-linear-to-bl flex flex-col justify-center items-center gap-12 h-full from-blue-ntt-900 to-blue-ntt-700 rounded-lg p-8 md:p-12 mx-auto">
                  <p className="text-xl leading-normal italic text-center">
                    "{item.desc}"
                  </p>
                  <div className="text-center text-2xl font-bold">
                    {item.name}
                  </div>
                </div>
              </CarouselItem>
            )}
          />
        </CarouselContent>
        <CarouselPrevious
          className={"max-xl:hidden -left-12"}
          onClick={stopAutoplay}
        />
        <CarouselNext
          className={"max-xl:hidden  -right-12"}
          onClick={stopAutoplay}
        />
      </Carousel>
    </div>
  );
};

export default SpeaksSection;
