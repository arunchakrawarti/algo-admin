import MainTrade from '@/components/pages/trade-management/Index'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <MainTrade/>
      </MainLayout>
    </div>
  )
}

export default page
