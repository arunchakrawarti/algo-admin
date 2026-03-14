import { Pencil, Trash2 } from "lucide-react";

export const planTableConfig = {
  columns: [
    {
      label: "PLAN NAME",
      key: "name",
    },
    {
      label: "PRICE",
      key: "price",
    },
    {
      label: "BILLING CYCLE",
      key: "billing",
    },
    {
      label: "STRATEGIES",
      key: "strategies",
    },
    {
      label: "SUBSCRIBERS",
      key: "subscribers",
    },
    {
      label: "STATUS",
      key: "status",
      render: (value) => (
        <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium text-green-700 bg-green-100 rounded-full">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          {value}
        </span>
      ),
    },
  ],

  data: [
    {
      name: "Basic Trader",
      price: "₹999",
      billing: "Monthly",
      strategies: 2,
      subscribers: 145,
      status: "Active",
    },
    {
      name: "Pro Trader",
      price: "₹2,499",
      billing: "Monthly",
      strategies: 5,
      subscribers: 289,
      status: "Active",
    },
    {
      name: "Elite Trader",
      price: "₹19,999",
      billing: "Yearly",
      strategies: "Unlimited",
      subscribers: 67,
      status: "Active",
    },
  ],

  actions: [
    ({ row }) => (
      <button className="text-gray-500 hover:text-blue-600 transition">
        <Pencil size={18} />
      </button>
    ),
    ({ row }) => (
      <button className="text-gray-500 hover:text-red-600 transition">
        <Trash2 size={18} />
      </button>
    ),
  ],
};