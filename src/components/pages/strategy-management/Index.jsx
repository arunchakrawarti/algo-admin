import Heading from '@/components/atoms/Heading'
import StrategyCard from '@/components/molecules/StrategyCard'
import React from 'react'

const MainStrategy = () => {
 
  return (
    <div>
      <Heading
        title="All Strategy"
        paragraph="Manage and monitor all trading strategy"
        actions={[
          {
            text: "Create Strategy",
            route: "/reports",
            icon: "ri-add-line",
            variant: "gradient",
          },
        ]}
      />

      <div className="mt-10">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {strategies.map((item) => (
          <StrategyCard key={item.id} strategy={item} />
        ))}
      </div>
    </div>
    </div>
  )
}

export default MainStrategy

export const strategies =   [
  {
    "id": 1,
    "name": "Bank Nifty Scalping",
    "symbol": "BANKNIFTY",
    "exchange": "NFO",
    "status": "Active",
    "headerBg": "bg-indigo-600",
    "stats": {
      "winRate": "68.5%",
      "maxDD": "12%",
      "riskReward": "1:2.2",
      "sharpe": "1.8",
      "avgProfit": "₹2,450",
      "slTarget": "30 / 65"
    }
  },
  {
    "id": 2,
    "name": "Nifty Trend Following",
    "symbol": "NIFTY",
    "exchange": "NFO",
    "status": "Active",
    "headerBg": "bg-indigo-600",
    "stats": {
      "winRate": "72.3%",
      "maxDD": "8%",
      "riskReward": "1:2.0",
      "sharpe": "2.1",
      "avgProfit": "₹3,200",
      "slTarget": "45 / 90"
    }
  },
  {
    "id": 2,
    "name": "Intraday Breakout",
    "symbol": "RELIANCE",
    "exchange": "NSE",
    "status": "Active",
    "headerBg": "bg-indigo-600",
    "stats": {
      "winRate": "64.2%",
      "maxDD": "15%",
      "riskReward": "1:2.2",
      "sharpe": "1.5",
      "avgProfit": "₹1,850",
      "slTarget": "25 / 55"
    }
  },
  {
    "id": 4,
    "name": "Options Selling",
    "symbol": "BANKNIFTY",
    "exchange": "NFO",
    "status": "Paused",
    "headerBg": "bg-slate-500",
    "stats": {
      "winRate": "75.8%",
      "maxDD": "18%",
      "riskReward": "1:2.0",
      "sharpe": "1.6",
      "avgProfit": "₹4,100",
      "slTarget": "35 / 70"
    }
  }
]