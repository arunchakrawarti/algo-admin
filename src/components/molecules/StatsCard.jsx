import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const StatsCard = ({
  title,
  value,
  change,
  subtitle,
  icon: Icon,
  gradient, 
  iconBg = "bg-green-100",
  iconColor = "text-green-600",
  badgeBg = "bg-green-50",
  badgeColor = "text-green-600",
  isPositive = true, 
}) => {
  const isGradient = !!gradient;

  return (
    <div
      className={`relative overflow-hidden rounded-2xl p-6 shadow-sm transition-all hover:shadow-md h-full
      ${
        isGradient
          ? `text-white ${gradient}`
          : "bg-white border border-gray-100"
      }`}
    >
      <div className="flex items-center justify-between mb-4 relative z-10">
        <div
          className={`p-3 rounded-xl ${
            isGradient ? "bg-white/20 text-white" : `${iconBg} ${iconColor}`
          }`}
        >
          {Icon && <Icon size={22} strokeWidth={2.5} />}
        </div>
        {change && (
          <div
            className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-md
            ${
              isGradient
                ? "bg-white/20 text-white"
                : `${badgeBg} ${badgeColor}`
            }`}
          >
            {isPositive ? <ArrowUpRight size={14} strokeWidth={3} /> : <ArrowDownRight size={14} strokeWidth={3} />}
            {change}
          </div>
        )}
      </div>

      <div className="relative z-10">
        <h4
          className={`text-sm font-medium mb-1 ${
            isGradient ? "text-white/80" : "text-gray-500"
          }`}
        >
          {title}
        </h4>

        <h2
          className={`text-3xl font-bold ${
            isGradient ? "text-white" : "text-slate-900"
          }`}
        >
          {value}
        </h2>
        <p className="mt-2 text-[14px]">
          <span className={`font-bold ${isGradient ? "text-white" : isPositive ? "text-green-500" : "text-red-500"}`}>
             {change}
          </span>
          <span
            className={`ml-1 font-normal text-[14px] ${
              isGradient ? "text-white/60" : "text-green-500"
            }`}
          >
            {subtitle}
          </span>
        </p>
      </div>

      <div
        className={`absolute -top-10 -right-10 w-28 h-28 rounded-full ${
          isGradient ? "bg-white/10" : "bg-gray-50/50"
        }`}
      ></div>
    </div>
  );
};

export default StatsCard;