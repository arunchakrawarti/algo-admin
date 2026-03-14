import Heading from '@/components/atoms/Heading'
import StatsCard from '@/components/molecules/StatsCard'
import { Users, CreditCard, TrendingUp, Activity } from "lucide-react";
import { statsData } from "../../../config/dashboard";

const iconMap = {
  Users,
  CreditCard,
  TrendingUp,
  Activity
};
import React from 'react'
import Analytics from './Analytics';
import AnalyticsDashboard from './AnalyticsDashboard';
import TradeAnalytics from './TradeAnalytics';
import RevenueSummary from './RevenueSummary';
import BrokerActivityDashboard from './BrokerActivityDashboard';

const MainDashboard = () => {
  return (
    <div>
      <Heading
  title="Dashboard Overview"
  paragraph="Welcome back, Admin · Last updated just now"
  showLive={true}
  actions={[
    {
      text: "View Reports",
      route: "/reports",
      icon: "ri-arrow-right-up-line",
      variant: "gradient",
    },
  ]}
/>


<div className="grid mt-5 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  {statsData.map((item) => {
    const Icon = iconMap[item.icon];

    return (
      <StatsCard
        key={item.id}
        title={item.title}
        value={item.value}
        change={item.change}
        subtitle={item.subtitle}
        icon={Icon}
        gradient={item.gradient}
      />
    );
  })}
</div>

<Analytics/>
<AnalyticsDashboard/>
<TradeAnalytics/>
<BrokerActivityDashboard/>
<RevenueSummary/>
    </div>
  )
}

export default MainDashboard
