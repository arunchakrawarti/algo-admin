"use client"
import Heading from '@/components/atoms/Heading'
import BasicTable from '@/components/common/BasicTable'
import React from 'react'

const MainBlockedUsers = () => {
    const columns = [
    { label: "USER ID", key: "userId" },
    { label: "NAME", key: "name" },
    { label: "EMAIL", key: "email" },
    { label: "PHONE", key: "phone" },
    { label: "JOINED DATE", key: "joinedDate" },
    {
      label: "STATUS",
      key: "status",
      render: (status) => (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-700 border border-red-100">
          <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-red-500"></span>
          {status}
        </span>
      ),
    },
  ];

  const data = [
    {
      userId: "USR-1238",
      name: "Vikram Singh",
      email: "vikram.singh@email.com",
      phone: "+91 98765 43214",
      joinedDate: "20/12/2025",
      status: "Blocked",
    },
  ];

  const UnblockAction = ({ row }) => (
    <button 
      onClick={() => console.log("Unblocking", row.userId)}
      className="px-4 py-1.5 text-sm font-medium text-emerald-600 border border-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors"
    >
      Unblock
    </button>
  );
  return (
    <div>
<Heading
  title="Blocked Users"
  paragraph="View and manage users who have been blocked from the platform"
/>

<div className="mt-5">
      <BasicTable
        columns={columns} 
        data={data} 
        actions={[UnblockAction]} 
        pagination={true}
      />
    </div>
    </div>
  )
}

export default MainBlockedUsers
