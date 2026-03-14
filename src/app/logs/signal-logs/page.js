import MainSingleLogs from '@/components/pages/logs/signal-logs/Index'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <MainSingleLogs/>
      </MainLayout>
    </div>
  )
}

export default page
