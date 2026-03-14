"use client";
import BasicTable from "@/components/common/BasicTable";
import { orderTableConfig } from "../../../config/ordertable";

export default function OrderTable() {
  return (
    <div className="mt-6">
      <BasicTable
        columns={orderTableConfig.columns}
        data={orderTableConfig.data}
        pagination={true}
        pageSize={10}
        total={40}
      />
    </div>
  );
}