"use client";
import React from "react";
import { Users, CheckCircle, Pencil, Trash2 } from "lucide-react";
import Button from "../common/Button";

const PricingPlanCard = ({
  title,
  price,
  duration,
  subscribers,
  strategies,
  features = [],
  gradient,
}) => {
  return (
    <div className="bg-[var(--color-white)] rounded-2xl shadow-sm border border-gray-200 overflow-hidden w-full">
      <div className={`relative p-5 sm:p-6 lg:p-7 text-[var(--color-white)] bg-gradient-to-r ${gradient}`}>
        <div className="absolute -top-6 -right-6 w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 bg-white/10 rounded-full blur-xl"></div>

        <h3 className="text-base sm:text-lg font-semibold">{title}</h3>

        <h2 className="text-3xl sm:text-4xl font-bold mt-2">{price}</h2>

        <p className="text-xs sm:text-sm opacity-90">{duration}</p>
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex items-center justify-between text-xs sm:text-sm text-[var(--color-gray-600)] flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <Users size={16} />
            <span className="font-medium">{subscribers}</span>
            subscribers
          </div>

          <span className="flex items-center gap-1 text-green-600 bg-green-100 px-3 py-1 rounded-full text-xs">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Active
          </span>
        </div>

        <hr className="my-4 border-gray-200" />
        <div>
          <p className="text-xs text-[var(--color-gray-500)] font-semibold uppercase">
            Strategies Included
          </p>

          <p className="text-lg sm:text-xl font-semibold mt-1">
            {strategies}
          </p>
        </div>
        <div className="mt-4 space-y-2 sm:space-y-3">
          <p className="text-xs text-[var(--color-gray-500)] font-semibold uppercase">
            Features
          </p>

          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-2 text-xs sm:text-sm text-[var(--color-gray-600)]"
            >
              <CheckCircle
                size={16}
                className="text-green-500 mt-[2px] flex-shrink-0"
              />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <hr className="my-5 border-gray-200" />

        <div className="flex gap-2 sm:gap-3">

          <Button variant="primary" className="flex-1">
            <Pencil size={16} />
            Edit
          </Button>

          <Button variant="danger">
            <Trash2 size={16} />
          </Button>

        </div>
      </div>
    </div>
  );
};

export default PricingPlanCard;