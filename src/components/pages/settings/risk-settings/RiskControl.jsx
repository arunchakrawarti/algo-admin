import Button from '@/components/common/Button';
import OverviewCard from '@/components/molecules/OverviewCard';
import { Save } from 'lucide-react';
import React from 'react'

const RiskControl = () => {
  return (
    <div>
      <div className="w-full mt-5  p-6 bg-white border border-gray-100 shadow-2xl rounded-[1rem]">
        
        <h2 className="mb-8 text-2xl font-bold text-[#1E293B]">Risk Controls</h2>
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
            Save Risk Settings
          </Button>
        </div>
        
      </div>
    </div>
  )
}

export default RiskControl

const controls = [
    {
      id: 1,
      title: "Stop Loss Required",
      description: "Require stop loss for all trades",
      isActive: true,
    },
    {
      id: 2,
      title: "Target Required",
      description: "Require target price for all trades",
      isActive: true,
    },
    {
      id: 3,
      title: "Trailing Stop Enabled",
      description: "Allow trailing stop loss orders",
      isActive: true,
    }
  ];
