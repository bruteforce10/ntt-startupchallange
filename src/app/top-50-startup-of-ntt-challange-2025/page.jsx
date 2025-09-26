"use client";

import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { TOP_50_STARTUPS } from "@/constant/top50Startups";

export default function Top50StartupsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-ntt-700 via-blue-ntt-400 to-blue-ntt-900">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
        
          
          {/* Glowing 50 Circle */}
          <div className="flex justify-center mb-6 md:mb-8">
            <div className="relative">
           <Image src="/top-50.webp" alt="Top 50 Startup of NTT Startup Challenge 2025" width={1000} height={1000} />
            </div>
          </div>
          
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 px-4">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-16">
          {TOP_50_STARTUPS.map((startup) => (
            <div
              key={startup.id}
              className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 hover:shadow-xl hover:shadow-blue-500/20"
            >
              {/* Logo */}
              <div className="flex items-center mb-3 md:mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg md:rounded-xl flex items-center justify-center text-white font-bold text-lg md:text-xl mr-3 md:mr-4 flex-shrink-0">
                  {startup.logo}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white truncate">{startup.name}</h3>
              </div>
              
              {/* Description */}
              <p className="text-blue-100 text-xs md:text-sm leading-relaxed line-clamp-4">
                {startup.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="text-center text-white/80">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
            <Image
              src="/logo-footer.webp"
              alt="NTT Logo"
              width={120}
              height={40}
              className="h-8 sm:h-10 w-auto object-contain"
            />
            <span className="text-xs sm:text-sm">© NTT DATA, Inc.</span>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
