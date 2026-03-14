import Heading from '@/components/atoms/Heading'
import OverviewCard from '@/components/molecules/OverviewCard'
import React from 'react'
import UserTable from './UserTable'

const MainUsers = () => {
  return (
    <div>
      <Heading
  title="All Users"
  paragraph="Manage all platform users"
/>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-5 gap-5">
  {statsData.map((item, index) => (
    <OverviewCard key={index} {...item} />
  ))}
</div>
<UserTable/>
    </div>
  )
}

export default MainUsers

export const statsData = [
  {
    title: "Total Users",
    value: 5,
    valueColor: "text-blue-600"
  },
  {
    title: "Active Users",
    value: 4,
    valueColor: "text-green-600"
  },
  {
    title: "Blocked Users",
    value: 1,
    valueColor: "text-red-500"
  },
  {
    title: "With Subscriptions",
    value: "4",
    valueColor: "text-blue-400"
  }
];