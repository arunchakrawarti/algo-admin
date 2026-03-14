import Heading from '@/components/atoms/Heading'
import PricingPlanCard from '@/components/molecules/PricingPlanCard'
import React from 'react'
import SubscriptionTable from './SubscriptionTable'

const Mainsubscription = () => {
  return (
    <div>
      <Heading
  title="Subscription Plans"
  paragraph="Manage subscription plans and pricing"
  actions={[
    {
      text: "Create Plan",
      route: "/reports",
      icon: "ri-add-line",
      variant: "gradient",
    },
  ]}
/>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-6">
  {traderPlans.map((plan, index) => (
    <PricingPlanCard key={index} {...plan} />
  ))}
</div>
<SubscriptionTable/>
    </div>
  )
}

export default Mainsubscription

export const traderPlans = [
  {
    title: "Basic Trader",
    price: "₹999",
    duration: "Monthly",
    subscribers: 145,
    strategies: 2,
    gradient: "from-blue-500 to-indigo-600",
    features: [
      "Auto Trade Execution",
      "Basic Analytics",
      "Email Support"
    ]
  },
  {
    title: "Pro Trader",
    price: "₹2,499",
    duration: "Monthly",
    subscribers: 289,
    strategies: 5,
    gradient: "from-purple-500 to-indigo-600",
    features: [
      "Auto Trade Execution",
      "Strategy Access",
      "Analytics Dashboard",
      "Priority Support"
    ]
  },
  {
    title: "Elite Trader",
    price: "₹19,999",
    duration: "Yearly",
    subscribers: 67,
    strategies: "Unlimited",
    gradient: "from-teal-500 to-cyan-600",
    features: [
      "Auto Trade Execution",
      "All Strategy Access",
      "Advanced Analytics",
      "Priority Signals",
      "Dedicated Support"
    ]
  }
];