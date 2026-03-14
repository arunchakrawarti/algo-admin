import MainExecution from '@/components/pages/logs/execution-logs/Index'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <MainExecution/>
      </MainLayout>
    </div>
  )
}

export default page
