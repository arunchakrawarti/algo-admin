import { Eye, Ban, Shield, Key } from "lucide-react";

export const userTableConfig = {
  columns: [
    {
      label: "USER ID",
      key: "userId",
      render: (value) => (
        <span className="text-gray-600 font-medium">{value}</span>
      ),
    },

    {
      label: "NAME",
      key: "name",
      render: (value) => (
        <div className="font-semibold text-gray-800">{value}</div>
      ),
    },

    {
      label: "EMAIL",
      key: "email",
      render: (value) => (
        <span className="text-[#667085]">{value}</span>
      ),
    },

    {
      label: "PHONE",
      key: "phone",
      render: (value) => (
        <div className="text-[#667085] whitespace-pre-line">
          {value}
        </div>
      ),
    },

    {
      label: "BROKER",
      key: "broker",
    },

    {
      label: "SUBSCRIPTION",
      key: "subscription",
      render: (value) => (
        <span className="text-blue-600 font-semibold">{value}</span>
      ),
    },

    {
      label: "TOTAL TRADES",
      key: "trades",
    },

    {
      label: "TOTAL P&L",
      key: "pnl",
      render: (value) => {
        const isProfit = value > 0;

        return (
          <span
            className={`font-semibold ${
              isProfit ? "text-green-600" : "text-red-500"
            }`}
          >
            {isProfit ? "+" : ""}₹{value.toLocaleString()}
          </span>
        );
      },
    },

    {
      label: "STATUS",
      key: "status",
      render: (value) => {
        const active = value === "Active";

        return (
          <span
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium
            ${
              active
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-600"
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                active ? "bg-green-500" : "bg-red-500"
              }`}
            ></span>
            {value}
          </span>
        );
      },
    },
  ],

  data: [
    {
      userId: "USR-1234",
      name: "Rahul Sharma",
      email: "rahul.sharma@email.com",
      phone: "+91 98765\n43210",
      broker: "Zerodha",
      subscription: "Pro Trader",
      trades: 456,
      pnl: 45600,
      status: "Active",
    },

    {
      userId: "USR-1235",
      name: "Priya Patel",
      email: "priya.patel@email.com",
      phone: "+91 98765\n43211",
      broker: "Groww",
      subscription: "Basic Trader",
      trades: 234,
      pnl: 12300,
      status: "Active",
    },

    {
      userId: "USR-1236",
      name: "Amit Kumar",
      email: "amit.kumar@email.com",
      phone: "+91 98765\n43212",
      broker: "Angel One",
      subscription: "Elite Trader",
      trades: 1205,
      pnl: 185600,
      status: "Active",
    },

    {
      userId: "USR-1237",
      name: "Sneha Reddy",
      email: "sneha.reddy@email.com",
      phone: "+91 98765\n43213",
      broker: "Upstox",
      subscription: "Pro Trader",
      trades: 567,
      pnl: -8900,
      status: "Active",
    },

    {
      userId: "USR-1238",
      name: "Vikram Singh",
      email: "vikram.singh@email.com",
      phone: "+91 98765\n43214",
      broker: "Dhan",
      subscription: "None",
      trades: 89,
      pnl: -4500,
      status: "Blocked",
    },
  ],

  actions: [
    ({ row }) => (
      <button className="text-gray-500 hover:text-blue-600">
        <Eye size={18} />
      </button>
    ),

    ({ row }) => (
      <button className="text-gray-500 hover:text-yellow-600">
        <Ban size={18} />
      </button>
    ),

    ({ row }) => (
      <button className="text-gray-500 hover:text-green-600">
        <Shield size={18} />
      </button>
    ),

    ({ row }) => (
      <button className="text-gray-500 hover:text-purple-600">
        <Key size={18} />
      </button>
    ),
  ],
};