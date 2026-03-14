import MainStrategy from '@/components/pages/strategy-management/Index'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <MainStrategy/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
