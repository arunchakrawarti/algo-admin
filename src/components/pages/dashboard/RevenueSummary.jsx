import React from 'react';
import { DollarSign, TrendingUp, FileText } from "lucide-react";
import StatsCard from '@/components/molecules/StatsCard';

const RevenueSummary = () => {
  return (
    <div className="mt-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statsData.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            subtitle={stat.subtitle}
            icon={stat.icon}
            iconBg={stat.iconBg}
            iconColor={stat.iconColor}
            badgeBg={stat.badgeBg}
            badgeColor={stat.badgeColor}
            isPositive={stat.isPositive}
          />
        ))}
      </div>
    </div>
  );
};

export default RevenueSummary;



export const statsData = [
  {
    title: "Monthly Revenue",
    value: "₹12.46L",
    change: "+9.8%",
    subtitle: "from last month",
    icon: DollarSign,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    badgeBg: "bg-green-50",
    badgeColor: "text-green-600",
    isPositive: true,
  },
  {
    title: "Total Revenue",
    value: "₹8.96M",
    change: null, // Image mein iska badge nahi hai
    subtitle: "",
    icon: TrendingUp,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    isPositive: true,
  },
  {
    title: "Active Plans",
    value: "8",
    change: null,
    subtitle: "",
    icon: FileText,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    isPositive: true,
  },
];