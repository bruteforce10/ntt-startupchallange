import { HISTORY_CONTENT_2026, HISTORY_LIST } from "@/constant/history-content";
import { Users, Rocket, Globe, Award } from "lucide-react";
import React from "react";

const HIGHLIGHT_TEXT = "Taiwan, Hong Kong, South Korea, India and Australia.";

export function HistorySection2026() {
  const icons = [
    <Users className="w-5 h-5 opacity-40" />,
    <Rocket className="w-5 h-5 opacity-40" />,
    <Globe className="w-5 h-5 opacity-40" />,
    <Award className="w-5 h-5 opacity-40" />,
  ];

  return (
    <section className="container mx-auto px-4 py-20 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        {/* Left side text content */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px bg-blue-ntt-200 w-12" />
            <span className="text-blue-ntt-200 uppercase tracking-widest text-sm font-semibold">
              The Legacy
            </span>
          </div>
          <h2 className="text-4xl font-bold leading-tight">
            History of NTT <br /> Startup Challenge
          </h2>
          <div className="text-gray-400 space-y-4 text-base leading-relaxed">
            {HISTORY_CONTENT_2026.map((text, idx) => (
              <p key={idx}>
                {text.split(HIGHLIGHT_TEXT).map((part, partIndex, parts) => (
                  <React.Fragment key={partIndex}>
                    {part}
                    {partIndex < parts.length - 1 ? (
                      <span className="underline decoration-blue-ntt-200 decoration-2 underline-offset-4 text-white">
                        {HIGHLIGHT_TEXT}
                      </span>
                    ) : null}
                  </React.Fragment>
                ))}
              </p>
            ))}
          </div>
        </div>

        {/* Right side stats grid */}
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {HISTORY_LIST.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#050C1F] border border-white/5 rounded-2xl p-6 hover:bg-[#0A132C] hover:border-blue-ntt-200/30 transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-6">
                <p className="text-3xl md:text-4xl font-black text-white group-hover:text-blue-ntt-200 transition-colors">
                  {item.number}+
                </p>
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-blue-ntt-200/10 transition-colors">
                  {icons[idx] || <Award className="w-5 h-5 opacity-40" />}
                </div>
              </div>
              <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
