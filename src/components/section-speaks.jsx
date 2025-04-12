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
import EachUtils from "@/utils/eachUtils";
import { SPEAK_CONTENT } from "@/constant/speaks-content";
import Autoplay from "embla-carousel-autoplay";

const SpeaksSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <div className="md:pt-28 pt-16 ">
      <HeadingText text={"Our Community Speaks"} />
      <Carousel
        plugins={[plugin.current]}
        className="lg:max-w-6xl max-lg:max-w-2xl px-4 container mx-auto"
      >
        <CarouselContent>
          <EachUtils
            of={SPEAK_CONTENT}
            render={(item, index) => (
              <CarouselItem key={index}>
                <div className="bg-linear-to-bl flex flex-col gap-12 h-full from-blue-ntt-900 to-blue-ntt-700 rounded-lg p-8 md:p-12 mx-auto">
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
        <CarouselPrevious className={"max-xl:hidden -left-12"} />
        <CarouselNext className={"max-xl:hidden  -right-12"} />
      </Carousel>
    </div>
  );
};

export default SpeaksSection;
