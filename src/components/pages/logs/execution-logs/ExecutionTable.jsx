"use client"
import BasicTable from "@/components/common/BasicTable";
import { CheckCircle2, AlertCircle } from "lucide-react"; 
import clsx from "clsx";

const ExecutionTable = () => {
  const columns = [
    { label: "EXECUTION ID", key: "exeId" },
    { 
      label: "TRADE ID", 
      key: "tradeId",
      render: (val) => <span className="font-bold text-[#101828]">{val}</span> 
    },
    { label: "BROKER", key: "broker" },
    {
      label: "RESULT",
      key: "result",
      render: (val) => {
        const isSuccess = val.toLowerCase().includes("successfully");
        return (
          <div className={clsx(
            "flex items-center gap-2 font-medium",
            isSuccess ? "text-[#12B76A]" : "text-[#F04438]"
          )}>
            {isSuccess ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
            {val}
          </div>
        );
      }
    },
    { 
      label: "LATENCY", 
      key: "latency",
      render: (val) => {
        const speed = parseInt(val);
        return (
          <span className={clsx(
            "font-bold",
            speed < 200 ? "text-[#12B76A]" : "text-[#F04438]"
          )}>
            {val}
          </span>
        );
      }
    },
    { 
      label: "ERROR", 
      key: "error",
      render: (val) => (
        <span className={val === "—" ? "text-gray-400" : "text-[#F04438]"}>
          {val}
        </span>
      )
    },
    { label: "TIME", key: "time" },
  ];

  const data = [
    { exeId: "EXE-7890", tradeId: "TRD-5678", broker: "Zerodha", result: "Order placed successfully", latency: "127ms", error: "—", time: "06/03/2026, 10:15:24" },
    { exeId: "EXE-7891", tradeId: "TRD-5679", broker: "Groww", result: "Order placed successfully", latency: "145ms", error: "—", time: "06/03/2026, 10:18:46" },
    { exeId: "EXE-7892", tradeId: "TRD-5680", broker: "Angel One", result: "Order placed successfully", latency: "98ms", error: "—", time: "06/03/2026, 09:30:16" },
    { exeId: "EXE-7893", tradeId: "TRD-5681", broker: "Upstox", result: "Order failed", latency: "256ms", error: "Insufficient margin", time: "06/03/2026, 11:02:35" },
  ];

  return (
    <div className="mt-5">
      <BasicTable 
        columns={columns} 
        data={data} 
        pagination={true}
        wrapperClassName="rounded-xl border border-gray-100 shadow-sm"
      />
    </div>
  );
};

export default ExecutionTable;