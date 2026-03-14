export const SideBarData = [
  {
    section: "MAIN",
    items: [
      {
        title: "Dashboard",
        icon: "ri-dashboard-line",
        link: "/",
      },
    ],
  },

  {
    section: "TRADING",
    items: [
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
    ],
  },

  {
    section: "MANAGEMENT",
    items: [
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
            link: "/users/all-users",
          },
          {
            title: "Blocked Users",
            link: "/users/blocked-users",
          },
        ],
      },
    ],
  },

  {
    section: "SYSTEM",
    items: [
      {
        title: "Settings",
        icon: "ri-settings-3-line",
        link: "#",
        children: [
          {
            title: "Global Settings",
            link: "/settings/global-settings",
          },
          {
            title: "Risk Settings",
            link: "/settings/risk-settings",
          },
          {
            title: "Webhook Settings",
            link: "/settings/webhook-settings",
          },
        ],
      },
      {
        title: "Logs",
        icon: "ri-file-list-3-line",
        link: "#",
        children: [
          {
            title: "Signal Logs",
            link: "/logs/signal-logs",
          },
          {
            title: "Execution Logs",
            link: "/logs/execution-logs",
          },
        ],
      },
    ],
  },
];