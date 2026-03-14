"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Button from "../common/Button";

const Heading = ({
  title,
  paragraph,
  actions = [],
  showLive = false,
  showBack = false,
  backRoute = "#",
}) => {
  const router = useRouter();

  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div>

        {showBack && (
          <Button
            onClick={() => router.push(backRoute)}
            className="flex items-center gap-2 mb-2 text-gray-500 hover:text-black"
          >
            <i className="ri-arrow-left-line text-xl"></i>
            Back
          </Button>
        )}

        <h1 className="text-2xl font-semibold text-gray-800">
          {title}
        </h1>

        {paragraph && (
          <p className="text-sm text-gray-500 mt-1">
            {paragraph}
          </p>
        )}

      </div>


      {/* RIGHT SIDE */}
      {(showLive || actions.length > 0) && (
        <div className="flex items-center gap-3">

          {showLive && (
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Live
            </div>
          )}

          {actions.map((btn, i) => (
            <Button
              key={i}
              onClick={() => router.push(btn.route)}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition
${
  btn.variant === "gradient"
    ? "text-white bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]"
    : "bg-[var(--color-gray-100)] text-[var(--color-gray-700)]"
}`}
            
            >
              {btn.icon && <i className={btn.icon}></i>}
              {btn.text}
            </Button>
          ))}

        </div>
      )}
    </div>
  );
};

export default Heading;