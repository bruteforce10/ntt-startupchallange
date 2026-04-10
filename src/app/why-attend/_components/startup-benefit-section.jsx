import HeadingText from "@/components/heading-text";
import { Check } from "lucide-react";

export function StartupBenefitsSection() {
  // Benefits data
  const benefits = [
    {
      title: "Potential Investment Opportunities:",
      description:
        "Explore potential investment opportunities through NTT’s corporate venture arms, tailored to promising startups seeking to scale.",
    },
    {
      title: "Enhanced Visibility and PR Support:",
      description:
        "Gain significant exposure through high-profile PR initiatives and NTT’s media channels, strengthening your startup’s public presence.",
    },
    {
      title: "Comprehensive Resource Access:",
      description:
        "Access cutting-edge co-working spaces and a wide range of strategic resources to support your technological and business growth.",
    },
    {
      title: "Sales and Marketing Support:",
      description:
        "Benefit from customer referrals, access to sales channels, and assistance with test marketing initiatives.",
    },
    {
      title: "Exclusive Networking Opportunities:",
      description:
        "Connect with industry leaders, government officials, and influential venture capitalists through NTT’s extensive global network.",
    },
    {
      title: "Empowering Startups through the Venture Client Model:",
      description:
        "Leverage NTT’s commitment to the Venture Client Model, enabling direct collaboration opportunities to refine and scale your innovations using NTT’s resources and expertise.",
      footnote:
        "*Venture Client Model: Enterprises become clients of startups, leveraging startup solutions to accelerate innovation and drive mutual growth.",
    },
  ];

  return (
    <section className=" pt-16 md:pt-28">
      <div className="container mx-auto px-4">
        <HeadingText text={"NTT’s Supports/Assets"} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4">
              {/* Checkmark icon */}
              <div className="flex-shrink-0 mt-1">
                <Check className="h-6 w-6 text-blue-400" />
              </div>

              {/* Benefit content */}
              <div>
                <h3 className="text-white text-lg md:text-xl font-medium mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 mb-2">{benefit.description}</p>
                {benefit.footnote && (
                  <p className="text-gray-400 text-sm italic">
                    {benefit.footnote}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
