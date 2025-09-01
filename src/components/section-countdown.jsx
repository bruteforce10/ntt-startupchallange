"use client";
import Countdown from "react-countdown";
import { useEffect, useState } from "react";

export function CountdownSection({ newEvent, title }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const countdownDate = new Date(newEvent);

  // Renderer for the countdown
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <p className="text-4xl lg:text-6xl text-center">COMING SOON</p>;
    } else {
      return (
        <div className="flex items-center justify-center gap-4 md:gap-8">
          <CountdownUnit value={days} label="Days" />
          <CountdownSeparator />
          <CountdownUnit value={hours} label="Hours" />
          <CountdownSeparator />
          <CountdownUnit value={minutes} label="Minutes" />
          <CountdownSeparator />
          <CountdownUnit value={seconds} label="Seconds" />
        </div>
      );
    }
  };

  return (
    <section className="pt-16 md:pt-28">
      <div className="container mx-auto px-4 space-y-8 lg:space-y-12">
        <h2 className="text-3xl lg:text-5xl max-w-5xl leading-relaxed mx-auto font-medium text-center bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text">
          {title}
        </h2>
        <div className="bg-linear-to-bl from-blue-ntt-900 to-blue-ntt-700 rounded-lg p-8 md:p-12 max-w-3xl mx-auto">
          {isClient ? (
            <Countdown date={countdownDate} renderer={renderer} />
          ) : (
            <div className="flex items-center justify-center gap-4 md:gap-8">
              <CountdownUnit value="00" label="Days" />
              <CountdownSeparator />
              <CountdownUnit value="00" label="Hours" />
              <CountdownSeparator />
              <CountdownUnit value="00" label="Minutes" />
              <CountdownSeparator />
              <CountdownUnit value="00" label="Seconds" />
            </div>
          )}
        </div>
        
        {/* Startup Ranking Announcements Section */}
        <div className="max-w-2xl mx-auto bg-linear-to-bl from-blue-ntt-900 to-blue-ntt-700 rounded-lg ">
          <div className="bg-gradient-to-br from-blue-ntt-900 to-blue-ntt-800 rounded-lg p-6 md:p-8 text-white">
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-lg md:text-xl font-medium">
                  The Top 50 startups will be announced on September 26, 2025.
                </p>
              </div>
              
              <div className="flex justify-center">
                <div className="w-full h-px bg-gradient-to-r from-blue-400 to-blue-600"></div>
              </div>
              
              <div className="text-center">
                <p className="text-lg md:text-xl font-medium">
                  The Top 20 startups will be announced on October 16, 2025.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Component for each countdown unit (days, hours, minutes, seconds)
function CountdownUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-4xl md:text-6xl font-bold">
        {value.toString().padStart(2, "0")}
      </span>
      <span className="text-sm md:text-base text-gray-400 mt-1">{label}</span>
    </div>
  );
}

// Separator between countdown units
function CountdownSeparator() {
  return <span className="text-4xl md:text-6xl font-bold ">:</span>;
}
