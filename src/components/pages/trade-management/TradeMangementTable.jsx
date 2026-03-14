"use client";
import React from "react";
import { Filter, Eye } from "lucide-react";
import Input from "@/components/common/Input";
import BasicTable from "@/components/common/BasicTable";
import { tradeTableConfig } from "../../../config/tradetable";

const TableActions = ({ row }) => {
  return (
    <button className="text-[var(--color-gray-400)] hover:text-blue-600 transition-colors">
      <Eye size={18} />
    </button>
  );
};

const TradeMangementTable = () => {
  return (
    <div className="mt-5">
      <div className="w-full bg-[var(--color-white)] border border-gray-200 rounded-2xl p-6 shadow-sm">

        <div className="flex items-center gap-2 mb-6 text-[var(--color-gray-800)]">
          <Filter size={18} className="text-blue-600" />
          <span className="font-bold text-sm tracking-tight">Filters</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

          <Input
            label="DATE FROM"
            type="date"
            icon=""
          />

          <Input
            label="DATE TO"
            type="date"
            icon=""
          />

          <Input
            label="STRATEGY"
            type="select"
            placeholder="All Strategies"
            options={["Scalping", "Intraday", "Swing"]}
            icon=""
          />

          <Input
            label="BROKER"
            type="select"
            placeholder="All Brokers"
            options={["Angel One", "Zerodha", "Upstox"]}
            icon=""
          />

          <Input
            label="STATUS"
            type="select"
            placeholder="All Status"
            options={["Active", "Completed", "Pending"]}
            icon=""
          />

          <Input
            label="TRADE TYPE"
            type="select"
            placeholder="All Types"
            options={["Buy", "Sell"]}
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