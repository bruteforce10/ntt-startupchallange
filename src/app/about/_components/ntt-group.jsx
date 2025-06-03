import HeadingText from "@/components/heading-text";
import { GROUP_NTT_CONTENT } from "@/constant/group-ntt-content";
import EachUtils from "@/utils/eachUtils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NttGroup = () => {
  return (
    <section id="group" className="pt-16 md:pt-28  container  mx-auto px-4 ">
      <HeadingText text={"NTT Group"} />
      <div className="flex flex-wrap justify-center items-center mx-auto sm:gap-8 max-w-6xl bg-white rounded-3xl  px-6 py-8">
        <EachUtils
          of={GROUP_NTT_CONTENT}
          render={(item) => (
            <Link key={item.url} href={item.url} className="block">
              <Image
                src={`/ntt-group/${item.img}.avif`}
                alt={item.img}
                quality={100}
                width={220}
                height={250}
              />
            </Link>
          )}
        />
      </div>
    </section>
  );
};

export default NttGroup;
