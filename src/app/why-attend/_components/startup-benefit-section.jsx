import HeadingText from "@/components/heading-text";
import { Check } from "lucide-react";

export function StartupBenefitsSection() {
  // Benefits data
  const benefits = [
    {
      title: "Potential Investment Opportunities:",
      description:
        "Explore the possibility of investments through NTT's corporate ventures, tailored to promising startups seeking to scale.",
    },
    {
      title: "Enhanced Visibility and PR Support:",
      description:
        "Gain significant exposure through high-profile PR activities and NTT's media channels, boosting your startup's public profile.",
    },
    {
      title: "Comprehensive Resource Access:",
      description:
        "Utilize cutting-edge co-working spaces and access a variety of strategic resources that support your technological and business advancement.",
    },
    {
      title: "Sales and Marketing Support:",
      description:
        "Assistance with customer referrals, sales channel provision, and test marketing strategies.",
    },
    {
      title: "Exclusive Networking Opportunities:",
      description:
        "Connect with key industry leaders, government officials, and influential venture capitalists through NTT's extensive global networks.",
    },
    {
      title: "Empowering Startups through *Venture Client Model:",
      description:
        "Leverage NTT's commitment to the Venture Client model, offering startups direct collaboration opportunities to refine and scale their innovations with our extensive resources and expertise.",
      footnote:
        "*Venture Client Model: Enterprises become startups' clients, leveraging startups' solutions to accelerate innovation and drive mutual growth",
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
