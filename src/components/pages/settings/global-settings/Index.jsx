import Heading from '@/components/atoms/Heading'
import Input from '@/components/common/Input'
import React from 'react'
import PlatformControls from './PlatformControls'

const Mainglobal = () => {
  return (
    <div>
    <Heading
      title="Global Settings"
      paragraph="Configure platform-wide settings"
    />

     <div className="mt-5">
      <div className="space-y-8">
        <section className="rounded-2xl border border-gray-100 bg-[var(--color-white)] p-6 shadow-sm">
          <h2 className="mb-6 text-xl font-semibold text-slate-800">Platform Settings</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Input
              label="PLATFORM NAME"
              placeholder="Trading Platform"
            />
            <Input
              label="SUPPORT EMAIL"
              placeholder="support@platform.com"
            />
          </div>
        </section>
        <section className="rounded-2xl border border-gray-100 bg-[var(--color-white)] p-6 shadow-sm">
          <h2 className="mb-6 text-xl font-semibold text-slate-800">Trading Settings</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <Input
                label="MAX TRADES PER STRATEGY"
                placeholder="50"
                type="number"
              />
              <p className="mt-2 text-xs text-[var(--color-gray-400)]">Maximum trades allowed per strategy per day</p>
            </div>
            
            <div>
              <Input
                label="MAX TRADES PER USER"
                placeholder="20"
                type="number"
              />
              <p className="mt-2 text-xs text-[var(--color-gray-400)]">Maximum trades allowed per user per day</p>
            </div>

            <div className="md:col-span-1">
              <Input
                label="DEFAULT RISK LEVEL"
                type="select"
                options={[
                  { label: "Low", value: "low" },
                  { label: "Medium", value: "medium" },
                  { label: "High", value: "high" },
                ]}
                defaultValue="medium"
              />
            </div>
          </div>
        </section>

      </div>
    </div>
    <PlatformControls/>
    </div>
  )
}

export default Mainglobal
