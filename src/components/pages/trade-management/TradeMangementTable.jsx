"use client";
import React from "react";
import { Filter, Eye } from "lucide-react";
import Input from "@/components/common/Input";
import BasicTable from "@/components/common/BasicTable";
import { tradeTableConfig } from "../../../config/tradetable";

const TableActions = ({ row }) => {
  return (
    <button className="text-gray-400 hover:text-blue-600 transition-colors">
      <Eye size={18} />
    </button>
  );
};

const TradeMangementTable = () => {
  return (
    <div className="mt-5">

      {/* Filters */}
      <div className="w-full bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">

        <div className="flex items-center gap-2 mb-6 text-[#1e293b]">
          <Filter size={18} className="text-blue-600" />
          <span className="font-bold text-sm tracking-tight">Filters</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

          <Input
            label="DATE FROM"
            type="date"
            className="border border-gray-200 !bg-white rounded-xl h-[48px]"
            labelClass="text-[10px] font-bold text-slate-400 uppercase tracking-wider"
            icon=""
          />

          <Input
            label="DATE TO"
            type="date"
            className="border border-gray-200 h-[48px]"
            labelClass="text-[10px] font-bold text-slate-400 uppercase tracking-wider"
            icon=""
          />

          <Input
            label="STRATEGY"
            type="select"
            placeholder="All Strategies"
            options={["Scalping", "Intraday", "Swing"]}
            className="border border-gray-200 h-[48px]"
            labelClass="text-[10px] font-bold text-slate-400 uppercase tracking-wider"
            icon=""
          />

          <Input
            label="BROKER"
            type="select"
            placeholder="All Brokers"
            options={["Angel One", "Zerodha", "Upstox"]}
            className="border border-gray-200 h-[48px]"
            labelClass="text-[10px] font-bold text-slate-400 uppercase tracking-wider"
            icon=""
          />

          <Input
            label="STATUS"
            type="select"
            placeholder="All Status"
            options={["Active", "Completed", "Pending"]}
            className="border border-gray-200 h-[48px]"
            labelClass="text-[10px] font-bold text-slate-400 uppercase tracking-wider"
            icon=""
          />

          <Input
            label="TRADE TYPE"
            type="select"
            placeholder="All Types"
            options={["Buy", "Sell"]}
            className="border border-gray-200 h-[48px]"
            labelClass="text-[10px] font-bold text-slate-400 uppercase tracking-wider"
            icon=""
          />

        </div>
      </div>
     <div className="mt-5">
         <BasicTable
        columns={tradeTableConfig.columns}
        data={tradeTableConfig.data}
        actions={[TableActions]}
        pagination={true}
        total={tradeTableConfig.data.length}
        pageSize={10}
      />
     </div>

    </div>
  );
};

export default TradeMangementTable;