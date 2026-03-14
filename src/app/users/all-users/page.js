import MainUsers from '@/components/pages/users/all-users/Index'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <MainUsers/>
      </MainLayout>
    </div>
  )
}

export default page
