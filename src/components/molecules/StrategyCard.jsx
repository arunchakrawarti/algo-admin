import React from "react";
import { History, Trash2, Edit3 } from "lucide-react";
import Button from "../common/Button";
import { statsConfig } from "../../config/statsConfig";

const StrategyCard = ({ strategy }) => {

  const { name, symbol, exchange, status, headerBg, stats } = strategy;

  const isActive = status === "Active";

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 flex flex-col h-full transition hover:shadow-xl">
        
      <div className={`${headerBg} p-4 sm:p-5 text-white`}>
        <div className="flex justify-between items-start gap-3">

          <div>
            <h3 className="text-lg sm:text-xl font-bold">{name}</h3>

            <div className="flex items-center gap-2 mt-1 text-[10px] sm:text-xs uppercase tracking-widest">
              {symbol}
              <span className="opacity-40">•</span>
              {exchange}
            </div>
          </div>

          <span
            className={`${
              isActive ? "bg-white/20" : "bg-orange-400/30"
            } px-3 py-1 rounded-full text-[10px] font-bold uppercase`}
          >
            {status}
          </span>

        </div>
      </div>

      <div className="p-4 sm:p-5 grid grid-cols-2 gap-3">

        {statsConfig.map((item, index) => {

          const Icon = item.icon;

          return (
            <div
              key={index}
              className={`${item.bg} ${item.border} p-3 sm:p-4 rounded-xl border`}
            >

              <div className="flex items-center gap-2 mb-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-500">

                <Icon size={14} className={item.color} />

                {item.label}

              </div>

              <div className={`text-base sm:text-lg font-bold ${item.color}`}>
                {stats[item.key]}
              </div>

            </div>
          );

        })}

      </div>

      <div className="px-4 sm:px-5 pb-4 flex justify-between items-center border-b border-gray-100">

        <div>
          <p className="text-[10px] font-bold text-gray-400 uppercase">
            Avg Profit
          </p>

          <p className="text-base sm:text-lg font-bold text-slate-800">
            {stats.avgProfit}
          </p>
        </div>

        <div className="text-right">
          <p className="text-[10px] font-bold text-gray-400 uppercase">
            SL / Target
          </p>

          <p className="text-base sm:text-lg font-bold text-slate-800">
            {stats.slTarget}
          </p>
        </div>

      </div>

      <div className="grid grid-cols-3 divide-x divide-gray-100 bg-gray-50">

        <Button variant="outline">
          <History size={16} />
          History
        </Button>

        <Button variant="outline">
          <Trash2 size={16} />
          Delete
        </Button>

        <Button variant="outline">
          <Edit3 size={16} />
          Update
        </Button>

      </div>

    </div>
  );
};

export default StrategyCard;