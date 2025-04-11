import React from "react";
import Image from "next/image";

const FeedbackCard = ({ title, img, desc, index }) => {
  const isEven = index % 2 === 0;
  return (
    <div
      className={`flex lg:flex-row flex-col  items-center justify-between gap-12 ${
        isEven && "lg:flex-row-reverse"
      }`}
    >
      <div className="w-full lg:w-1/2 order-2 lg:order-1">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          {title}
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">{desc}</p>
      </div>
      <div className="w-full lg:w-1/2 order-1 lg:order-2">
        <div className="rounded-2xl overflow-hidden">
          <Image
            src={`/feedback/${img}?height=400&width=600`}
            alt="Industry leaders discussing business"
            width={800}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
