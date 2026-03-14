import Heading from '@/components/atoms/Heading'
import OverviewCard from '@/components/molecules/OverviewCard'
import React from 'react'
import SignalTable from './SignalTable'

const MainSingleLogs = () => {
  return (
    <div>
<Heading
  title="Signal Logs"
  paragraph="View all incoming webhook signal logs"
/>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
  {statsData.map((item, index) => (
    <OverviewCard key={index} {...item} />
  ))}
</div>
<SignalTable/>
    </div>
  )
}

export default MainSingleLogs

export const statsData = [
  {
    title: "Total Signals",
    value: 4,
    valueColor: "text-blue-600"
  },
  {
    title: "Successful",
    value: 3,
    valueColor: "text-green-600"
  },
  {
    title: "Rejected",
    value: 1,
    valueColor: "text-red-500"
  },
  
];