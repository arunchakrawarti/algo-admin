"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavigationLink = ({ title, icon, link, children }) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const hasChildren = children && children.length > 0;

  return (
    <li>
      <Link
        href={link || "#"}
        onClick={() => hasChildren && setOpen(!open)}
        className={`flex items-center justify-between px-4 py-2 rounded-xl cursor-pointer transition
        ${
          pathname === link
            ? "bg-white/20 text-white"
            : "text-white/80 hover:bg-white/10"
        }`}
      >

        <div className="flex items-center gap-3">
          <i className={`${icon} text-lg`}></i>
          <span className="text-md font-medium">{title}</span>
        </div>

        {hasChildren && (
          <i
            className={`ri-arrow-down-s-line transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          ></i>
        )}

      </Link>
      {hasChildren && open && (
        <ul className="ml-8 mt-2 space-y-2 py-2 text-sm text-white/70">
          {children.map((child, index) => (
            <li key={index}>
              <Link
                href={child.link}
                className="flex items-center gap-2 hover:text-white"
              >
                <i className={`${child.icon} text-sm`}></i>
                {child.title}
              </Link>
            </li>
          ))}
        </ul>
      )}

    </li>
  );
};

export default NavigationLink;