"use client";
import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line
} from 'recharts';

const dailyTradesData = [
  { name: 'Feb 21', trades: 140 }, { name: 'Feb 22', trades: 180 },
  { name: 'Feb 23', trades: 155 }, { name: 'Feb 24', trades: 200 },
  { name: 'Feb 25', trades: 215 }, { name: 'Feb 26', trades: 190 },
  { name: 'Feb 27', trades: 165 }, { name: 'Feb 28', trades: 185 },
  { name: 'Mar 1', trades: 195 }, { name: 'Mar 2', trades: 205 },
  { name: 'Mar 3', trades: 175 }, { name: 'Mar 4', trades: 190 },
  { name: 'Mar 5', trades: 210 }, { name: 'Mar 6', trades: 230 },
];

const signalData = [
  { time: '09:00', signals: 45 }, { time: '10:00', signals: 89 },
  { time: '11:00', signals: 68 }, { time: '12:00', signals: 52 },
  { time: '13:00', signals: 40 }, { time: '14:00', signals: 78 },
  { time: '15:00', signals: 92 },
];

const TradeAnalytics = () => {
  return (
    <div className="mt-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
    
        <div className="bg-[var(--color-white)] p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-[var(--color-gray-800)]">Daily Trades</h3>
            <p className="text-sm text-[var(--color-gray-400)]">Volume over last 14 days</p>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dailyTradesData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={{ stroke: "#e2e8f0", strokeWidth: 1 }}
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: 11}} 
                  dy={10}
                />
                <YAxis 
                 axisLine={{ stroke: "#e2e8f0", strokeWidth: 1 }}
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: 11}} 
                />
                <Tooltip 
                  cursor={{fill: '#f8fafc'}}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                />
                <Bar 
                  dataKey="trades" 
                  fill="#8b5cf6" 
                  radius={[4, 4, 0, 0]} 
                  barSize={20}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="bg-[var(--color-white)] p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-[var(--color-gray-800)]">Signals Today</h3>
            <p className="text-sm text-[var(--color-gray-400)]">Hourly signal activity</p>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={signalData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis 
                  dataKey="time" 
                   axisLine={{ stroke: "#e2e8f0", strokeWidth: 1 }}
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: 11}} 
                  dy={10}
                />
                <YAxis 
                 axisLine={{ stroke: "#e2e8f0", strokeWidth: 1 }}
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: 11}} 
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="signals" 
                  stroke="#06b6d4" 
                  strokeWidth={3} 
                  dot={{ r: 4, fill: '#06b6d4', strokeWidth: 2, stroke: '#fff' }}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TradeAnalytics;