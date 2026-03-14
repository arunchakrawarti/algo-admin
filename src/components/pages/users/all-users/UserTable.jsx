"use client"
import BasicTable from "@/components/common/BasicTable";
import { userTableConfig } from "../../../../config/usertable";

export default function UserTable() {
  return (
    <div className="mt-5">
        <BasicTable
      columns={userTableConfig.columns}
      data={userTableConfig.data}
      actions={userTableConfig.actions}
      pagination={true}
      total={50}
      pageSize={10}
    />
    </div>
  );
}