export const SideBarData = [
  {
    title: "Dashboard",
    icon: "ri-dashboard-line",
    link: "/dashboard",
  },
  {
    title: "Strategy Management",
    icon: "ri-line-chart-line",
    link: "/strategy-management",
  },
  {
    title: "Broker Integration",
    icon: "ri-flask-line",
    link: "/broker-integration",
  },
  {
    title: "Trade Management",
    icon: "ri-arrow-left-right-line",
    link: "/trade-management",
  },
  {
    title: "Subscriptions",
    icon: "ri-wallet-3-line",
    link: "/subscriptions",
  },
  {
    title: "Orders",
    icon: "ri-shopping-cart-line",
    link: "/orders",
  },

  {
    title: "Users",
    icon: "ri-user-3-line",
    link: "#",
    children: [
      {
        title: "All Users",
        icon: "ri-user-line",
        link: "/users/all-users",
      },
      {
        title: "Blocked Users",
        icon: "ri-user-unfollow-line",
        link: "/users/blocked-users",
      },
    ],
  },

  {
    title: "Settings",
    icon: "ri-user-3-line",
    link: "#",
    children: [
      {
        title: "Global Settings",
        icon: "ri-user-line",
        link: "/settings/global-settings",
      },
      {
        title: "Risk Settings",
        icon: "ri-user-unfollow-line",
        link: "/settings/risk-settings",
      },
      {
        title: "Webhook Settings",
        icon: "ri-user-unfollow-line",
        link: "/settings/webhook-settings",
      },
    ],
  },
   {
    title: "Logs",
    icon: "ri-user-3-line",
    link: "#",
    children: [
      {
        title: "Signal Logs",
        icon: "ri-user-line",
        link: "/logs/signal-logs",
      },
      {
        title: "Execution Logs",
        icon: "ri-user-unfollow-line",
        link: "/logs/execution-logs",
      },
    ],
  },
];