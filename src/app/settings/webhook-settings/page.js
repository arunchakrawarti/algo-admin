import Mainwebhook from '@/components/pages/settings/webhook-settings/Index'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
         <Suspense fallback={<div>Loading...</div>}>
        <Mainwebhook/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
