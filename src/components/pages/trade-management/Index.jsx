import Heading from '@/components/atoms/Heading'
import React from 'react'
import TradeMangementTable from './TradeMangementTable'

const MainTrade = () => {
  return (
    <div>
      <Heading
          title="Trade Management"
          paragraph="View and manage all trade in one place"
        />
        <TradeMangementTable/>
    </div>
  )
}

export default MainTrade
