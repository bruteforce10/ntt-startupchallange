import React from "react";
import HeadingText from "./heading-text";
import EachUtils from "@/utils/eachUtils";
import { NOMINATE_CONTENT } from "@/constant/finalist-content";
import Image from "next/image";
import Link from "next/link";

const NominateSectionSection = () => {
  return (
    <section className="pt-16 md:pt-28 px-4">
      <HeadingText text={"The Winners of NTT Challenge 2025"} />
      <div className="bg-linear-to-bl  from-blue-ntt-900 to-blue-ntt-700 rounded-lg p-8 md:p-12 max-w-5xl mx-auto">
        <div className="flex max-sm:flex-col max-sm:gap-16 max-sm:items-center  sm:justify-around">
          <EachUtils
            of={NOMINATE_CONTENT}
            render={(item) => (
              // <div key={item.id} className="flex flex-col items-center gap-4">
              //   <Image
              //     src={item.img}
              //     alt={item.name + " " + "NTT-Challange-Startup"}
              //     width={130}
              //     height={130}
              //   />
              //   <p className="text-center text-2xl font-medium">{item.name}</p>
              // </div>
              <Link href={item.link} key={item.id} target="_blank">
                <Image
                  src={item.img}
                  alt={item.name + " " + "NTT-Challange-Startup"}
                  width={280}
                  className="sm:max-w-[280px] min-w-[180px] h-auto"
                  height={280}
                />
              </Link>
            )}
          />
        </div>
        <div className="text-right mt-8 text-lg text-gray-500">
          The winners of the NTT Startup Challenge 2025
        </div>
      </div>
    </section>
  );
};

export default NominateSectionSection;
