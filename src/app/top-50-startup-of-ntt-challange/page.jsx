"use client";

import Image from "next/image";
import InitialPage from "@/components/pages/initial-page";
import TOP_STARTUPS from "@/constant/top-startup";

export default function Top50StartupsPage() {
  return (
    <InitialPage> 
    
      
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
        
          
          {/* Glowing 50 Circle */}
          <div className="flex justify-center mb-6 md:mb-8">
            <div className="relative">
           <Image src="/top-50.webp" alt="Top 50 Startup of NTT Startup Challenge 2025" width={1000} height={1000} className="mask-t-from-50% mask-b-from-50% mask-r-from-50% mask-l-from-50%" />
            </div>
          </div>
          
          {/* Title */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6 px-4">
          Top 50 Startups of NTT Startup Challenge 2025
          </h1>
          
          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed px-4">
          We extend our heartfelt congratulations to the Top 50 startups of the NTT Startup Challenge 2025. Your
          innovation, passion, and determination have set you apart, and we deeply appreciate the hard work and creativity
          you have demonstrated. This achievement is a testament to your commitment to driving positive change and
          shaping the future of technology and business.
          </p>
        </div>

        {/* Startups Grid */}
        <div className="space-y-12 mb-16">
          {TOP_STARTUPS.map((startup) => (
            <div
              key={startup.slug}
            >
              <div className="flex max-md:flex-col max-md:justify-center md:items-start gap-4 md:gap-12 max-md:items-center">
                {/* Logo - Clickable */}
                <div className="flex-shrink-0">
                <a 
                    href={startup.url.startsWith('http') ? startup.url : `https://${startup.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:scale-105 transition-transform duration-200"
                    >
                      <Image 
                        src={`/top-50-startup/${startup.slug}.png`} 
                        alt={startup.name} 
                        width={260} 
                        height={260} 
                        className="rounded-lg"
                      />
                    </a>
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Company Name */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">
                    {startup.name}
                  </h3>
                  
                  {/* Blue accent line */}
                  <div className="w-12 h-1 bg-blue-400 mb-4 md:mb-5"></div>
                  
                  {/* Description */}
                  <p className="text-blue-100 text-sm md:text-base leading-relaxed">
                    {startup.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      </InitialPage>
  );
}
