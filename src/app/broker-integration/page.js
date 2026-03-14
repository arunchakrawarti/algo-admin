import MainBroker from '@/components/pages/broker-integration/Index'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
         <Suspense fallback={<div>Loading...</div>}>
        <MainBroker/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
