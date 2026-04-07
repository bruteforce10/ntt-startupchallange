"use client";
import Countdown from "react-countdown";
import { useEffect, useState } from "react";

export function CountdownTimer({ date, className, completedNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const countdownDate = new Date(date);

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      if (completedNode) return completedNode;
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

  if (!isClient) {
    return (
      <div className={className}>
        <div className="flex items-center justify-center gap-4 md:gap-8">
          <CountdownUnit value="00" label="Days" />
          <CountdownSeparator />
          <CountdownUnit value="00" label="Hours" />
          <CountdownSeparator />
          <CountdownUnit value="00" label="Minutes" />
          <CountdownSeparator />
          <CountdownUnit value="00" label="Seconds" />
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <Countdown date={countdownDate} renderer={renderer} />
    </div>
  );
}

export function CountdownUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-4xl md:text-6xl font-bold">
        {value.toString().padStart(2, "0")}
      </span>
      <span className="text-sm md:text-base opacity-70 mt-1">{label}</span>
    </div>
  );
}

export function CountdownSeparator() {
  return <span className="text-4xl md:text-6xl font-bold ">:</span>;
}
