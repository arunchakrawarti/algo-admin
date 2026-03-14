// export const ViewAction = ({ row }) => (
//   <button className="text-blue-600">👁</button>
// );

// export const EditAction = ({ row }) => (
//   <button className="text-green-600">✏️</button>
// );

// export const BlockAction = ({ row }) => (
//   <button className="text-red-600">⛔</button>
// );


"use client";
import { useRouter } from "next/navigation";

export const ViewAction = ({ row }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(row.route)}
      className="text-blue-600 cursor-pointer"
      title="View"
    >
      <i className="ri-eye-line text-lg" />
    </button>
  );
};

export const EditAction = ({ row }) => (
  <button className="text-green-600" title="Edit">
    <i className="ri-edit-2-line text-lg" />
  </button>
);

export const BlockAction = ({ row }) => (
  <button className="text-red-600" title="Block">
    <i className="ri-forbid-2-line text-lg" />
  </button>
);
