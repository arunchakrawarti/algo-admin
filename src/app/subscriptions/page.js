import Mainsubscription from '@/components/pages/subscriptions/Index'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <Mainsubscription/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
