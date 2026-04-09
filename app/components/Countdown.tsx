"use client";

import { useEffect, useState } from "react";

function getTimeLeft(targetDate: Date) {
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();

  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const [targetDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 30);
    return d;
  });
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const items = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <div className="flex justify-center gap-4 sm:gap-6 mb-12">
      {items.map((item) => (
        <div
          key={item.label}
          className="bg-white/[.08] backdrop-blur-lg rounded-xl px-4 py-5 min-w-[70px] sm:min-w-[90px] text-center"
        >
          <span className="block text-3xl sm:text-4xl font-bold">
            {String(item.value).padStart(2, "0")}
          </span>
          <small className="text-xs uppercase tracking-widest text-white/60">
            {item.label}
          </small>
        </div>
      ))}
    </div>
  );
}
