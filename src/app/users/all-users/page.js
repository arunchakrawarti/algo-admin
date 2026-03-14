import MainUsers from '@/components/pages/users/all-users/Index'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
         <Suspense fallback={<div>Loading...</div>}>
        <MainUsers/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
