import MainBlockedUsers from '@/components/pages/users/blocked-users/Index'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <MainBlockedUsers/>
      </MainLayout>
    </div>
  )
}

export default page
