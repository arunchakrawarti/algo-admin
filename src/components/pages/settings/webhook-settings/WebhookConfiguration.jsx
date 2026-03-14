import Button from '@/components/common/Button'
import Input from '@/components/common/Input'
import OverviewCard from '@/components/molecules/OverviewCard'
import React from 'react'
import RateLimiting from './RateLimiting'

const WebhookConfiguration = () => {
  return (
    <div className='mt-5'>
      <div className="rounded-2xl border border-gray-100 bg-[var(--color-white)] p-8 shadow-sm">
  <section>
    <h2 className="mb-6 text-xl font-semibold text-[var(--color-gray-800)]">Webhook Configuration</h2>
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium text-[var(--color-gray-700)]">Webhook URL</label>
        <div className="flex gap-2">
          <Input
            placeholder="https://platform.com/api/webhook"
            className="border border-gray-200 bg-[var(--color-white)] w-full"
            icon=""
            readOnly
          />
          <Button variant='outline' className="h-13 border border-gray-300">
            <i className="ri-file-copy-line text-[var(--color-gray-500)]"></i>
          </Button>
        </div>
        <p className="text-[13px] text-[var(--color-gray-500)]">Endpoint URL for receiving webhook signals</p>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-[var(--color-gray-700)]">Webhook Secret</label>
        <div className="flex gap-2">
          <Input
            type="password"
            value="••••••••••••••••••••••••••••••••"
            icon=""
            className="border border-gray-200 bg-[var(--color-white)] w-full"
            readOnly
          />
          <Button variant='outline' className="h-13 border border-gray-300">
            <i className="ri-file-copy-line text-[var(--color-gray-500)]"></i>
          </Button>
        </div>
        <p className="text-[13px] text-[var(--color-gray-500)]">Secret key for webhook signature verification</p>
      </div>
    </div>
  </section>

  <hr className="my-8 border border-gray-100" />
  <section>
    <h2 className="mb-6 text-xl font-semibold text-[var(--color-gray-800)]">Security Settings</h2>
    <div className="space-y-2">
      <label className="text-sm font-medium text-[var(--color-gray-700)]">Allowed IP Addresses</label>
      <textarea
        className="min-h-[100px] w-full rounded-xl border border-gray-200 bg-[var(--color-white)] p-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
        placeholder="103.21.244.0/22, 103.22.200.0/22..."
        defaultValue="103.21.244.0/22, 103.22.200.0/22, 103.31.4.0/22"
      />
      <p className="text-[13px] text-[var(--color-gray-500)]">Comma-separated list of allowed IP addresses or CIDR ranges</p>
    </div>
     <hr className="my-6 border border-gray-100" />
    <div className='mt-5'>
    <h2 className="mb-6 text-2xl font-bold text-[#1E293B]">Risk Limiting</h2>
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
</div>
  </section>
</div>
<RateLimiting/>
    </div>
  )
}

export default WebhookConfiguration

const controls = [
    {
      id: 1,
      title: "Enable Signature Verification",
      description: "Verify webhook signatures using the secret key",
      isActive: true,
    },
    {
      id: 2,
      title: "Enable IP Whitelist",
      description: "Only accept webhooks from whitelisted IPs",
      isActive: true,
    },
  ];