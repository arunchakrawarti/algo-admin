import Button from '@/components/common/Button'
import Input from '@/components/common/Input'
import OverviewCard from '@/components/molecules/OverviewCard'
import React from 'react'

const RateLimiting = () => {
  return (
   <div className="rounded-2xl mt-5 border border-gray-100 bg-[var(--color-white)] p-8 shadow-sm space-y-8">
     
  <section>
    <h2 className="mb-6 text-xl font-semibold text-[var(--color-gray-800)]">Rate Limiting</h2>

    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-8">

      <div>
        <Input
          label="Rate Limit (per minute)"
          placeholder="100"
          type="number"
          icon=""
          className="border border-gray-200 bg-[var(--color-white)]"
        />
        <p className="text-[13px] mt-2 text-[var(--color-gray-500)]">
          Maximum webhooks allowed per minute
        </p>
      </div>

      <div>
        <Input
          label="Retry Attempts"
          placeholder="3"
          type="number"
          icon=""
          className="border border-gray-200 bg-[var(--color-white)]"
        />
        <p className="text-[13px] mt-2 text-[var(--color-gray-500)]">
          Number of retry attempts for failed webhooks
        </p>
      </div>

      <div>
        <Input
          label="Timeout (seconds)"
          placeholder="30"
          type="number"
          icon=""
          className="border border-gray-200 bg-[var(--color-white)]"
        />
        <p className="text-[13px] mt-2 text-[var(--color-gray-500)]">
          Request timeout in seconds
        </p>
      </div>

    </div>

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

  </section>

  <div className="pt-4">
    <Button variant='gradientcolor'>
      <i className="ri-save-line"></i>
      Save Webhook Settings
    </Button>
  </div>

</div>
  )
}

export default RateLimiting


const controls = [
  {
    id: 1,
    title: "Enable Rate Limiting",
    description: "Apply rate limits to webhook requests",
    isActive: true,
  }
];