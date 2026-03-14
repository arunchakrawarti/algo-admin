import Heading from '@/components/atoms/Heading'
import OverviewCard from '@/components/molecules/OverviewCard'
import React from 'react'
import OrderTable from './OrderTable'

const MainOrders = () => {
  return (
    <div>
  <Heading
  title="Subscription Orders"
  paragraph="View and manage all subscription orders"
  actions={[
    {
      text: "Export",
      route: "/reports",
      icon: "ri-download-line",
      variant: "gradient",
    },
  ]}
/>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-5 gap-5">
  {statsData.map((item, index) => (
    <OverviewCard key={index} {...item} />
  ))}
</div>
<OrderTable/>
    </div>
  )
}

export default MainOrders

export const statsData = [
  {
    title: "Total Orders",
    value: 4,
    valueColor: "text-gray-900"
  },
  {
    title: "Active Orders",
    value: 3,
    valueColor: "text-green-600"
  },
  {
    title: "Expired Orders",
    value: 1,
    valueColor: "text-red-500"
  },
  {
    title: "Total Revenue",
    value: "₹25,996",
    valueColor: "text-gray-900"
  }
];