"use client";
import Heading from "@/components/atoms/Heading";
import React, { useState, useEffect } from "react";
import ManageBroker from "./ManageBroker";

const ExpiringTimer = ({ targetDate = "2026-12-31T23:59:59" }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = +new Date(targetDate) - +new Date();

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const format = (num) => num.toString().padStart(2, "0");

  const Unit = ({ val, label }) => (
    <div className="flex flex-col items-center min-w-[35px] sm:min-w-[45px]">
      <span className="text-[var(--color-white)] text-lg sm:text-2xl font-bold leading-none">
        {format(val)}
      </span>
      <span className="text-[var(--color-gray-400)] text-[8px] sm:text-[10px] font-bold mt-1 uppercase tracking-tight">
        {label}
      </span>
    </div>
  );

  return (
    <div className="bg-[#212e3e] px-4 sm:px-5 py-3 rounded-2xl flex items-center justify-center shadow-md border border-gray-700/20 w-full sm:w-auto">
      <div>
        <p className="text-gray-300 text-[10px] sm:text-[11px] font-semibold leading-tight mb-2 sm:mb-3 text-center sm:text-left">
          Expiring in
        </p>

        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3">
          <Unit val={timeLeft.days} label="Days" />
          <span className="text-[var(--color-gray-400)] font-bold text-sm">:</span>

          <Unit val={timeLeft.hours} label="Hrs" />
          <span className="text-[var(--color-gray-400)] font-bold text-sm">:</span>

          <Unit val={timeLeft.minutes} label="Min" />
          <span className="text-[var(--color-gray-400)] font-bold text-sm">:</span>

          <Unit val={timeLeft.seconds} label="Sec" />
        </div>
      </div>
    </div>
  );
};

const MainBroker = () => {
  return (
    <div>
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6 w-full">
      
      {/* Left Section */}
      <div className="space-y-1 lg:text-left">
        <Heading
          title="Manage Broker"
          paragraph="Connect and manage your broker integrations"
        />
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-auto flex  lg:justify-end">
        <ExpiringTimer targetDate="2026-05-20T00:00:00" />
      </div>

    </div>
    <ManageBroker/>
    </div>
  );
};

export default MainBroker;