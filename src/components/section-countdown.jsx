"use client";
import Countdown from "react-countdown";
import { useEffect, useState } from "react";

export function CountdownSection({ newEvent, title }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Create date in GMT+8 (Singapore time)
  // Parse the ISO string and create a date object that represents the time in GMT+8
  const countdownDate = new Date(newEvent + "+08:00");

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
        <h2 className="text-3xl lg:text-5xl font-medium text-center bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text">
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
