import Mainglobal from '@/components/pages/settings/global-settings/Index'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <Mainglobal/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
