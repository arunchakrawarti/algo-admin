"use client";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const equityData = [
  { name: "Jan", value: 100000 },
  { name: "Feb", value: 125000 },
  { name: "Mar", value: 118000 },
  { name: "Apr", value: 145000 },
  { name: "May", value: 160000 },
  { name: "Jun", value: 185000 },
  { name: "Jul", value: 178000 },
  { name: "Aug", value: 205000 },
  { name: "Sep", value: 225000 },
  { name: "Oct", value: 218000 },
  { name: "Nov", value: 245000 },
  { name: "Dec", value: 270000 },
];

const planData = [
  { name: "Pro", value: 45, color: "#2563eb" },
  { name: "Basic", value: 30, color: "#8b5cf6" },
  { name: "Enterprise", value: 15, color: "#06b6d4" },
  { name: "Free", value: 10, color: "#94a3b8" },
];

const AnalyticsDashboard = () => {
  return (
    <div className="mt-5">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-800">
                Equity Curve
              </h3>
              <p className="text-sm text-gray-400">
                Portfolio performance over time
              </p>
            </div>

            <div className="flex gap-1 p-1 rounded-xl">
              {["1D", "1W", "1M", "3M"].map((t) => (
                <button
                  key={t}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg ${
                    t === "1M"
                      ? "bg-blue-600 text-white"
                      : "text-gray-500 hover:bg-gray-200"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={equityData}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient
                    id="equityGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor="#2563eb"
                      stopOpacity={0.2}
                    />
                    <stop
                      offset="95%"
                      stopColor="#2563eb"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#f1f5f9"
                />

                <XAxis
                  dataKey="name"
                  axisLine={{ stroke: "#e2e8f0" }}
                  tickLine={false}
                  tick={{ fill: "#94a3b8", fontSize: 12 }}
                />

                <YAxis
                  axisLine={{ stroke: "#e2e8f0" }}
                  tickLine={false}
                  tick={{ fill: "#94a3b8", fontSize: 12 }}
                />

                <Tooltip
                  contentStyle={{
                    borderRadius: "12px",
                    border: "none",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                />

                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#2563eb"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#equityGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
          
          <div className="mb-4">
            <h3 className="text-lg font-bold text-slate-800">
              Plan Distribution
            </h3>
            <p className="text-sm text-gray-400">
              Subscribers by plan type
            </p>
          </div>

          <div className="h-[220px] relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={planData}
                  innerRadius="65%"
                  outerRadius="85%"
                  paddingAngle={8}
                  dataKey="value"
                  stroke="none"
                >
                  {planData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={entry.color}
                      cornerRadius={6}
                    />
                  ))}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-6 space-y-3">
            {planData.map((item) => (
              <div
                key={item.name}
                className="flex justify-between items-center"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-slate-600">
                    {item.name}
                  </span>
                </div>

                <span className="font-bold text-slate-800 text-sm">
                  {item.value}%
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;