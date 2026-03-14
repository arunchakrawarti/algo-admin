import MainOrders from '@/components/pages/orders/Index'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <MainOrders/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
