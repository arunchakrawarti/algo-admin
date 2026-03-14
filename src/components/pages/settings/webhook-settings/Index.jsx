import Heading from '@/components/atoms/Heading'
import React from 'react'
import WebhookConfiguration from './WebhookConfiguration'

const Mainwebhook = () => {
  return (
    <div>
      <Heading
      title="Webhook Settings"
      paragraph="Configure webhook endpoints and security"
    />
    <WebhookConfiguration/>
    </div>
  )
}

export default Mainwebhook
