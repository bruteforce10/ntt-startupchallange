"use client";
import { useState } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function InnovationTabs() {
  const [activeTab, setActiveTab] = useState("docomo-ventures");

  const tabsData = [
    {
      id: "docomo-ventures",
      label: "NTT DOCOMO Ventures",
      logo: "/docomo-ntt.avif",
      logoAlt: "NTT DOCOMO Ventures logo",
      content: [
        "NTT DOCOMO Ventures makes business collaborations between startups and NTT group",
        "NTT DOCOMO Ventures Operates one of the largest corporate venture funds in Japan and has invested in the World's leading companies for over 10 years",
      ],
    },
    {
      id: "ntt-east",
      label: "NTT East",
      logo: "/ntt-easia.avif",
      logoAlt: "NTT e-Asia logo",
      content: [
        "NTT e-Asia aims to create sustainable values for the communities in Asia by working with local partners",
        "Expanding the possibilities of FTTH & Digital x Software to shape sustainable value for the Asian communities",
      ],
      secondLogo: "/ntt-ecity.avif",
      secondLogoAlt: "NTT e-City Labo logo",
      secondContent: [
        "Demonstration Field for Realization of a Regional Recycling-Oriented Society",
        "A facility where visitors can experience the solutions that the NTT East Group is working on to solve local issues",
      ],
    },
    {
      id: "ntt-west",
      label: "NTT West",
      logo: "/quint-bridge.avif",
      logoAlt: "QUINTBRIDGE logo",
      content: [
        'QUINTBRIDGE offers programs and events based on the three axes of "Learn", "Interact", and "Co-create"',
        "QUINTBRIDGE is a laboratory for social change, where enterprises, startups, students, and local governments — all who want a better world — can harness their individuality and interact as equals, creating innovative solutions through the exchange of ideas, technology, and expertise.",
      ],
    },
    {
      id: "ntt-com",
      label: "NTT Com",
      logo: "/extorch.avif",
      logoAlt: "ExTorch logo",
      content: [
        'Open innovation programs with external companies "Co-creation" with society',
        "Aiming to strengthen existing businesses and creating new ones by combining the technology of partners, with focus on startups, and assets put by NTT Communications together",
      ],
    },
    {
      id: "ntt-docomo",
      label: "NTT DOCOMO",
      logo: "/docomo-startup.avif",
      logoAlt: "docomo STARTUP logo",
      content: [
        'Employee-created "Bottom-up" approach',
        "New business creation program initiated by employees",
        'Training Program "COLLEGE"',
        'New Business Idea Contest "CHALLENGE"',
        'Accelerator Program "GROWTH"',
        "Develop new businesses from zero to one through those programs",
      ],
    },
  ];

  return (
    <section className="pt-16 md:pt-28">
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Open Innovation Activity
          </h2>
          <div className="h-1 w-24 bg-blue-500 mx-auto"></div>
        </div>

        {/* Tabs component */}
        <Tabs
          defaultValue="docomo-ventures"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          {/* Tab list - scrollable on mobile */}
          <div className="overflow-x-auto pb-2">
            <TabsList className="bg-transparent h-auto p-0 w-full flex justify-between md:justify-center mb-8">
              {tabsData.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className={`px-2 md:px-4 py-2 text-sm md:text-base text-white data-[state=active]:text-white data-[state=active]:shadow-none data-[state=active]:bg-transparent relative whitespace-nowrap
                    ${
                      activeTab === tab.id
                        ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-blue-500"
                        : ""
                    }`}
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Tab content */}
          {tabsData.map((tab) => (
            <TabsContent
              key={tab.id}
              value={tab.id}
              className="bg-[#0A1428] rounded-lg p-8 md:p-12 mt-0 border-none text-white"
            >
              <div className="flex flex-col items-center">
                {/* Logo */}
                <div className="mb-8">
                  <Image
                    src={tab.logo || "/placeholder.svg"}
                    alt={tab.logoAlt}
                    width={300}
                    height={80}
                    quality={100}
                    className="h-auto max-h-18 object-contain"
                  />
                </div>

                {/* Content paragraphs */}
                <div className="space-y-6 text-center max-w-4xl mx-auto">
                  {tab.content.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className={`text-md ${idx === 0 ? "text-md" : ""}`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Second logo and content if available */}
                {tab.secondLogo && (
                  <>
                    <div className="my-12">
                      <Image
                        src={tab.secondLogo || "/placeholder.svg"}
                        alt={tab.secondLogoAlt || ""}
                        width={300}
                        height={80}
                        className="h-auto max-h-20"
                      />
                    </div>
                    <div className="space-y-6 text-center max-w-4xl mx-auto">
                      {tab.secondContent?.map((paragraph, idx) => (
                        <p key={idx} className="text-md">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
