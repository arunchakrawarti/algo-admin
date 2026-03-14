import MainBroker from '@/components/pages/broker-integration/Index'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <MainBroker/>
      </MainLayout>
    </div>
  )
}

export default page
