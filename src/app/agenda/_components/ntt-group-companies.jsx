import Image from "next/image";
import { Check } from "lucide-react";
import HeadingText from "@/components/heading-text";
import { NTT_CONNECT } from "@/constant/agenda-ntt-content";

export function NttGroupCompanies() {
  return (
    <section id="ntt-connect" className=" pt-16 md:pt-28">
      <div className="container mx-auto px-4">
        <HeadingText text={"NTT Connect"} />
        <div className="space-y-16 md:space-y-24">
          {NTT_CONNECT.map((company, index) => (
            <div key={company.id} className="w-full">
              <div
                className={`flex flex-col ${
                  company.imageRight ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 md:gap-12 items-center`}
              >
                {/* Logo */}
                <div className="w-fit ">
                  <div className="flex items-center">
                    <Image
                      src={`/ntt-connect/${index + 1}.avif`}
                      alt={`${company.name} logo`}
                      width={900}
                      height={200}
                    />
                  </div>
                </div>

                {/* Features */}
                <div className="w-full  space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                    {company.name}
                  </h3>
                  {company.features.map((feature, idx) => (
                    <div key={idx} className="flex gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <Check className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <span className="font-medium text-white">
                          {feature.title}
                        </span>{" "}
                        <span className="text-gray-300">
                          {feature.description}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
