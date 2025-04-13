import Image from "next/image";
import { MapPin, Calendar, Clock } from "lucide-react";
import EachUtils from "@/utils/eachUtils";
import { BENEFIT_LIST, DETAIL_EVENTS } from "@/constant/agenda-ntt-content";

export function EventPromotion() {
  return (
    <section className=" pt-16 md:pt-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row rounded-3xl overflow-hidden">
          <div className="w-full lg:w-1/2 relative">
            {/* Main image */}
            <div className="relative h-[400px] lg:h-full">
              <Image
                src="/vanue.avif"
                alt="Soehanna Hall event venue"
                fill
                className="object-cover"
                priority
              />

              {/* Date indicator */}
              <div className="absolute top-4 right-4 bg-blue-ntt text-white p-3 rounded-lg text-center w-20">
                <div className="text-sm font-medium">Thu</div>
                <div className="text-4xl font-bold">14</div>
              </div>
            </div>

            {/* Event details overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#f5e7d3]/90 p-4 md:p-6">
              <div className="space-y-3">
                <EachUtils
                  of={DETAIL_EVENTS}
                  render={(item) => (
                    <div key={item.title} className="flex items-center gap-3">
                      {item.Icon}
                      <span className="text-gray-800 font-medium">
                        {item.title}
                      </span>
                    </div>
                  )}
                />
              </div>
            </div>
          </div>

          {/* Right side - Event description and benefits */}
          <div className="w-full lg:w-1/2 bg-[#0A1428] p-6 md:p-8 lg:p-10 text-white">
            <div className="space-y-6">
              {/* Main description */}
              <div>
                <p className="leading-relaxed mb-4">
                  Embark on a journey with hundreds startups across Southeast
                  Asia, aiming to be among the top 10 finalists and vie for the
                  top 3 winning spots.
                  <br /> *Any startup companies operating business in Southeast
                  Asia can apply. Please note that startup must be a legal
                  entity not just an idea.
                </p>
              </div>

              <div className="space-y-6">
                <EachUtils
                  of={BENEFIT_LIST}
                  render={(item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="bg-blue-600 rounded-full p-1">
                          <svg
                            className="h-4 w-4 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-blue-400 font-medium mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-200">{item.desc}</p>
                      </div>
                    </div>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
