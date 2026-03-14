import MainSingleLogs from '@/components/pages/logs/signal-logs/Index'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <MainSingleLogs/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
