import React from "react";
import HeadingText from "./heading-text";
import EachUtils from "@/utils/eachUtils";
import { NOMINATE_CONTENT } from "@/constant/finalist-content";
import Image from "next/image";

const NominateSectionSection = () => {
  return (
    <section className="pt-16 md:pt-28 px-4">
      <HeadingText text={"Awards"} />
      <div className="bg-linear-to-bl  from-blue-ntt-900 to-blue-ntt-700 rounded-lg p-8 md:p-12 max-w-4xl mx-auto">
        <div className="flex max-sm:flex-col max-sm:gap-12 sm:justify-around">
          <EachUtils
            of={NOMINATE_CONTENT}
            render={(item) => (
              <div key={item.id} className="flex flex-col items-center gap-4">
                <Image
                  src={item.img}
                  alt={item.name + " " + "NTT-Challange-Startup"}
                  width={130}
                  height={130}
                />
                {/* <p className="text-center text-3xl font-medium">{item.name}</p> */}
              </div>
            )}
          />
        </div>
        {/* <div className="text-right mt-8 text-lg text-gray-500">
          Prizes listed are in USD (U.S. Dollars)
        </div> */}
      </div>
    </section>
  );
};

export default NominateSectionSection;
