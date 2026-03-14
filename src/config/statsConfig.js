import { TrendingUp, Zap, Target, ShieldAlert } from "lucide-react";

export const statsConfig = [
  {
    key: "winRate",
    label: "Win Rate",
    icon: TrendingUp,
    color: "text-green-600",
    bg: "bg-green-50/50",
    border: "border-green-100",
  },
  {
    key: "maxDD",
    label: "Max DD",
    icon: Zap,
    color: "text-red-500",
    bg: "bg-red-50/50",
    border: "border-red-100",
  },
  {
    key: "riskReward",
    label: "Risk/Reward",
    icon: Target,
    color: "text-blue-600",
    bg: "bg-blue-50/50",
    border: "border-blue-100",
  },
  {
    key: "sharpe",
    label: "Sharpe",
    icon: ShieldAlert,
    color: "text-purple-600",
    bg: "bg-purple-50/50",
    border: "border-purple-100",
  },
];