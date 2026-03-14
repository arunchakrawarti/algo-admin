import MainSettings from '@/components/pages/settings/risk-settings/Index'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <MainSettings/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
