import React from 'react';
import { CheckCircle2, AlertCircle, Wifi, Circle } from 'lucide-react';
import Button from '@/components/common/Button';

const BrokerActivityDashboard = () => {
  const brokers = [
    { name: 'Zerodha', users: '342', status: 'connected', type: 'success' },
    { name: 'Angel One', users: '218', status: 'connected', type: 'success' },
    { name: 'Groww', users: '156', status: 'connected', type: 'success' },
    { name: 'Upstox', users: '89', status: 'warning', type: 'warning' },
    { name: 'Dhan', users: '67', status: 'connected', type: 'success' },
  ];

  const activities = [
    { title: 'New strategy deployed', desc: 'NIFTY Momentum — Webhook', time: '2m ago', color: 'bg-emerald-500' },
    { title: 'Signal received', desc: 'BUY BANKNIFTY 47000 CE', time: '5m ago', color: 'bg-blue-600' },
    { title: 'User subscription', desc: 'John D. upgraded to Pro', time: '12m ago', color: 'bg-emerald-400' },
    { title: 'Trade executed', desc: 'SELL NIFTY 19500 PE × 10', time: '18m ago', color: 'bg-slate-400' },
    { title: 'Broker disconnected', desc: 'Upstox — Token expired', time: '34m ago', color: 'bg-amber-500' },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6 mt-5">
      <div className="flex-1 bg-[var(--color-white)] rounded-2xl p-6 shadow-sm border border-slate-100">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-xl font-bold text-slate-800">Broker Connections</h2>
            <p className="text-sm text-slate-400">Real-time broker status</p>
          </div>
          <Wifi className="w-5 h-5 text-emerald-500" />
        </div>

        <div className="space-y-3">
          {brokers.map((broker, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-3">
                {broker.type === 'success' ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-amber-500" />
                )}
                <span className="font-semibold text-slate-700">{broker.name}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-slate-400">{broker.users} users</span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  broker.type === 'success' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                }`}>
                  {broker.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 bg-[var(--color-white)] rounded-2xl p-6 shadow-sm border border-slate-100">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-xl font-bold text-slate-800">Recent Activity</h2>
            <p className="text-sm text-slate-400">Latest platform events</p>
          </div>
          <Button variant="secondary">View all</Button>
        </div>

        <div className="space-y-6">
          {activities.map((item, idx) => (
            <div key={idx} className="flex gap-4 relative">
              <div className="flex flex-col items-center">
                <div className={`w-2 h-3 rounded-full mt-1.5 ${item.color} ring-4 ring-slate-50`} />
                {idx !== activities.length - 1 && <div className="w-[1px] h-full bg-slate-100 mt-2" />}
              </div>
              <div className="flex-1 flex justify-between items-start pb-2">
                <div>
                  <h4 className="text-[15px] font-semibold text-slate-700 leading-tight">{item.title}</h4>
                  <p className="text-sm text-slate-400 mt-1">{item.desc}</p>
                </div>
                <span className="text-xs text-slate-300 font-medium whitespace-nowrap">{item.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrokerActivityDashboard;