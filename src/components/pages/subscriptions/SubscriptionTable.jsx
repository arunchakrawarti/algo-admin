"use client";

import BasicTable from "@/components/common/BasicTable";
import { planTableConfig } from "../../../config/plantable";

export default function SubscriptionTable() {
  return (
    <div className="mt-6 bg-white rounded-md">
      <h2 className="text-xl font-semibold p-2">All Plans Overview</h2>

      <BasicTable
        columns={planTableConfig.columns}
        data={planTableConfig.data}
        actions={planTableConfig.actions}
        pagination={true}
        pageSize={10}
        total={30}
      />
    </div>
  );
}