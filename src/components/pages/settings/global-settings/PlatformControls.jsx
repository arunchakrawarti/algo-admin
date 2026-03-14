"use client";
import React from "react";
import { Save } from "lucide-react";
import OverviewCard from "@/components/molecules/OverviewCard";
import Button from "@/components/common/Button";

const PlatformControls = () => {
  return (
    <div className="mt-5">
      <div className="w-full  p-6 bg-white border border-gray-100 shadow-2xl rounded-[1rem]">
        
        <h2 className="mb-8 text-2xl font-bold text-[#1E293B]">System Controls</h2>
        <div className="space-y-4">
          {controls.map((control) => (
            <OverviewCard
              key={control.id}
              variant="system-control"
              title={control.title}
              description={control.description}
              isActive={control.isActive}
            />
          ))}
        </div>
        <div className="pt-6 mt-4 border-t border-gray-100">
          <Button variant="gradientcolor">
            <Save size={20} />
            Save Settings
          </Button>
        </div>
        
      </div>
    </div>
  );
};

export default PlatformControls;

const controls = [
    {
      id: 1,
      title: "Maintenance Mode",
      description: "Enable to put the platform in maintenance mode",
      isActive: true,
    },
    {
      id: 2,
      title: "Global Trading",
      description: "Enable or disable trading platform-wide",
      isActive: true,
    },
    {
      id: 3,
      title: "Push Notifications",
      description: "Send push notifications to users",
      isActive: true,
    },
    {
      id: 4,
      title: "Email Alerts",
      description: "Send email alerts for important events",
      isActive: true,
    },
  ];