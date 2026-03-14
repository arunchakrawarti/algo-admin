export const orderTableConfig = {
  columns: [
    {
      label: "ORDER ID",
      key: "orderId",
    },
    {
      label: "USER",
      key: "user",
    },
    {
      label: "PLAN",
      key: "plan",
    },
    {
      label: "AMOUNT",
      key: "amount",
    },
    {
      label: "STATUS",
      key: "status",
      render: (value) => {
        const isActive = value === "Active";

        return (
          <span
            className={`inline-flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-full
            ${
              isActive
                ? "text-green-700 bg-green-100"
                : "text-red-600 bg-red-100"
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                isActive ? "bg-green-500" : "bg-red-500"
              }`}
            ></span>
            {value}
          </span>
        );
      },
    },
    {
      label: "START DATE",
      key: "startDate",
    },
    {
      label: "END DATE",
      key: "endDate",
    },
    {
      label: "PAYMENT METHOD",
      key: "paymentMethod",
    },
  ],

  data: [
    {
      orderId: "ORD-8901",
      user: "Rahul Sharma",
      plan: "Pro Trader",
      amount: "₹2,499",
      status: "Active",
      startDate: "15/02/2026",
      endDate: "15/03/2026",
      paymentMethod: "UPI",
    },
    {
      orderId: "ORD-8902",
      user: "Priya Patel",
      plan: "Basic Trader",
      amount: "₹999",
      status: "Active",
      startDate: "01/03/2026",
      endDate: "01/04/2026",
      paymentMethod: "Credit Card",
    },
    {
      orderId: "ORD-8903",
      user: "Amit Kumar",
      plan: "Elite Trader",
      amount: "₹19,999",
      status: "Active",
      startDate: "10/12/2025",
      endDate: "10/12/2026",
      paymentMethod: "Net Banking",
    },
    {
      orderId: "ORD-8904",
      user: "Sneha Reddy",
      plan: "Pro Trader",
      amount: "₹2,499",
      status: "Expired",
      startDate: "05/01/2026",
      endDate: "05/02/2026",
      paymentMethod: "UPI",
    },
  ],
};