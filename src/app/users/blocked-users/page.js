import MainBlockedUsers from '@/components/pages/users/blocked-users/Index'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <MainBlockedUsers/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
