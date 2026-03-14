import Heading from '@/components/atoms/Heading'
import OverviewCard from '@/components/molecules/OverviewCard'
import React from 'react'
import ExecutionTable from './ExecutionTable'
import PerformanceExecution from './PerformanceExecution'

const MainExecution = () => {
  return (
    <div>
<Heading
  title="Execution Logs"
  paragraph="View trade execution logs and performance metrics"
/>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-5 gap-5">
  {statsData.map((item, index) => (
    <OverviewCard key={index} {...item} />
  ))}
</div>
<ExecutionTable/>
<PerformanceExecution/>
    </div>
  )
}

export default MainExecution

export const statsData = [
  {
    title: "Total Executions",
    value: 4,
    valueColor: "text-blue-600"
  },
  {
    title: "Successful",
    value: 3,
    valueColor: "text-green-600"
  },
  {
    title: "Failed",
    value: 1,
    valueColor: "text-red-500"
  },
  {
    title: "Avg Latency",
    value: "157ms",
    valueColor: "text-blue-500"
  },
  
];