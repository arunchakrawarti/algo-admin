import MainOrders from '@/components/pages/orders/Index'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <MainOrders/>
      </MainLayout>
    </div>
  )
}

export default page
