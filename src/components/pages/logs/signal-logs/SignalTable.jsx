"use client"
import BasicTable from "@/components/common/BasicTable";
import { LucideEye } from "lucide-react"; 
import clsx from "clsx";
import Button from "@/components/common/Button";

const SignalTable = () => {
  const columns = [
    { label: "LOG ID", key: "logId" },
    { 
      label: "SIGNAL ID", 
      key: "signalId",
      render: (val) => <span className="font-bold text-[#101828]">{val}</span> 
    },
    { label: "STRATEGY", key: "strategy" },
    {
      label: "STATUS",
      key: "status",
      render: (status) => {
        const isSuccess = status.toLowerCase() === "success";
        return (
          <span className={clsx(
            "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border",
            isSuccess 
              ? "bg-[#ECFDF3] text-[#027A48] border-[#ABEFC6]" 
              : "bg-[#FEF3F2] text-[#B42318] border-[#FECDCA]"  
          )}>
            <span className={clsx(
              "w-1.5 h-1.5 mr-2 rounded-full",
              isSuccess ? "bg-[#12B76A]" : "bg-[#F04438]"
            )}></span>
            {status}
          </span>
        );
      },
    },
    { label: "TIME", key: "time" },
  ];

  const data = [
    { logId: "LOG-5678", signalId: "SIG-2345", strategy: "Bank Nifty Scalping", status: "Success", time: "06/03/2026, 10:15:23" },
    { logId: "LOG-5679", signalId: "SIG-2346", strategy: "Intraday Breakout", status: "Success", time: "06/03/2026, 10:18:45" },
    { logId: "LOG-5680", signalId: "SIG-2347", strategy: "Bank Nifty Scalping", status: "Success", time: "06/03/2026, 10:45:12" },
    { logId: "LOG-5681", signalId: "SIG-2348", strategy: "Nifty Trend Following", status: "Rejected", time: "06/03/2026, 11:02:34" },
  ];
  const ViewAction = ({ row }) => (
    <Button variant="outline">
      <LucideEye size={18} />
    </Button>
  );

  return (
    <div className="mt-5">
      <BasicTable 
        columns={columns} 
        data={data} 
        actions={[ViewAction]} 
        pagination={true}
        wrapperClassName="rounded-lg shadow-sm"
      />
    </div>
  );
};

export default SignalTable;