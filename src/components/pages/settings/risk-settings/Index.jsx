import Heading from '@/components/atoms/Heading'
import Input from '@/components/common/Input'
import React from 'react'
import RiskControl from './RiskControl'

const MainSettings = () => {
  return (
    <div>
    <Heading
      title="Risk Settings"
      paragraph="Configure risk management parameters"
    />
    <div className="rounded-2xl border border-gray-100 bg-[var(--color-white)] mt-5 p-8 shadow-sm">
  <section>
    <h2 className="mb-6 text-xl font-semibold text-slate-800">Position Limits</h2>
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div className="space-y-2">
        <Input
          label="Max Position Size (%)"
          placeholder="10"
          icon=""
          type="number"
        />
        <p className="text-[13px] text-[var(--color-gray-500)]">Maximum position size as % of account balance</p>
      </div>

      <div className="space-y-2">
        <Input
          label="Max Leverage"
          placeholder="5"
          type="number"
        />
        <p className="text-[13px] text-[var(--color-gray-500)]">Maximum allowed leverage multiplier</p>
      </div>

      <div className="space-y-2 md:col-span-2">
        <Input
          label="Margin Requirement (%)"
          placeholder="20"
          type="number"
        />
        <p className="text-[13px] text-[var(--color-gray-500)]">Minimum margin required for positions</p>
      </div>
    </div>
  </section>

  <hr className="my-8 border-gray-100" />

  <section>
    <h2 className="mb-6 text-xl font-semibold text-[var(--color-gray-800)]">Loss Limits</h2>
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      <div className="space-y-2">
        <Input
          label="Max Loss Per Trade (%)"
          placeholder="2"
          type="number"
        />
      </div>
      <div className="space-y-2">
        <Input
          label="Max Daily Loss (%)"
          placeholder="5"
           type="number"
        />
      </div>
      <div className="space-y-2">
        <Input
          label="Max Drawdown (%)"
           type="number"
          placeholder="15"
        />
      </div>
    </div>
  </section>

  <hr className="my-8 border-gray-100" />
  <section>
    <h2 className="mb-6 text-xl font-semibold text-[var(--color-gray-800)]">Risk Parameters</h2>
    <div className="max-w-md space-y-2">
      <Input
        label="Risk:Reward Ratio"
        type="select"
        options={[
          { label: "1:2", value: "1:2" },
          { label: "1:3", value: "1:3" }
        ]}
        defaultValue="1:2"
      />
      <p className="text-[13px] text-slate-500">Minimum risk to reward ratio for trades</p>
    </div>
  </section>
</div>
<RiskControl/>
    </div>
  )
}

export default MainSettings
