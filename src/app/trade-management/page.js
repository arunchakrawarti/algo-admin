import MainTrade from '@/components/pages/trade-management/Index'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <MainTrade/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
