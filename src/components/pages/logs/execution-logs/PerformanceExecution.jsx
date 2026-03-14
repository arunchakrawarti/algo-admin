import OverviewCard from "@/components/molecules/OverviewCard";


const PerformanceExecution = () => {
  const performanceData = [
    { title: "Success Rate", value: "75.0%", variant: "performance" },
    { title: "Average Latency", value: "157ms", variant: "performance" },
    { title: "Total Executed", value: "4", variant: "performance" }
  ];

  return (
    <div className=" mt-5 p-6 bg-[var(--color-white)] rounded-3xl border border-gray-100 shadow-sm">
      <h2 className="text-xl font-bold text-[var(--color-gray-800)] mb-6 px-2">
        Performance Insights
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
        {performanceData.map((item, index) => (
          <OverviewCard
            key={index}
            title={item.title}
            value={item.value}
            variant={item.variant}
          />
        ))}
      </div>
    </div>
  );
};

export default PerformanceExecution;