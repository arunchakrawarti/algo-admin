import MainExecution from '@/components/pages/logs/execution-logs/Index'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <MainExecution/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
