
import StatsCard from "@/components/molecules/StatsCard";
import { Target, TrendingUp, DollarSign } from "lucide-react";

const Analytics = () => {
  return (
    
      <div className="grid grid-cols-1 md:grid-cols-2 mt-5 lg:grid-cols-3 gap-6">
        {statsData.map((stat) => (
          <StatsCard 
            key={stat.id} 
            title={stat.title}
            value={stat.value}
            change={stat.change}
            subtitle={stat.subtitle}
            icon={stat.icon}
            iconBg={stat.iconBg}
            iconColor={stat.iconColor}
          />
        ))}
      </div>
   
  );
};

export default Analytics;

const statsData = [
    {
      id: 1,
      title: "Win Rate",
      value: "68.7%",
      change: "+2.3%",
      subtitle: "from last week",
      icon: Target,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      badgeBg: "bg-green-50", 
    },
    {
      id: 2,
      title: "Platform P&L",
      value: "₹2.46M",
      change: "+15.4%",
      subtitle: "from last month",
      icon: TrendingUp,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      badgeBg: "bg-green-50",
    },
    {
      id: 3,
      title: "Monthly Revenue",
      value: "₹12.46L",
      change: "+9.8%",
      subtitle: "from last month",
      icon: DollarSign,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      badgeBg: "bg-blue-50",
    },
  ];