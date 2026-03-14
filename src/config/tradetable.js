export const tradeTableConfig = {
  columns: [
    { label: "BROKER", key: "broker" },
    { label: "SYMBOL", key: "symbol" },
    { label: "TYPE", key: "type" },
    { label: "TRADE TYPE", key: "tradeType" },
    { label: "ENTRY", key: "entry" },
    { label: "EXIT", key: "exit" },
    { label: "QTY", key: "qty" },
    { label: "P&L", key: "pnl" },
    { label: "STATUS", key: "status" },
    { label: "TIME", key: "time" }
  ],

  data: [
    {
      broker: "Zerodha",
      symbol: "BANKNIFTY24MAR45000CE",
      type: "BUY",
      tradeType: "Live",
      entry: "285.50",
      exit: "292.25",
      qty: "50",
      pnl: "₹337.50",
      status: "Closed",
      time: "06/03/2026, 10:15:23"
    },
    {
      broker: "Groww",
      symbol: "RELIANCE",
      type: "SELL",
      tradeType: "Live",
      entry: "2456.75",
      exit: "2442.30",
      qty: "25",
      pnl: "₹361.25",
      status: "Closed",
      time: "06/03/2026, 10:18:45"
    },
    {
      broker: "Angel One",
      symbol: "BANKNIFTY24MAR44500PE",
      type: "SELL",
      tradeType: "Live",
      entry: "125.00",
      exit: "-",
      qty: "75",
      pnl: "₹0.00",
      status: "Open",
      time: "06/03/2026, 09:30:15"
    },
    {
      broker: "Upstox",
      symbol: "NIFTY24MAR22000PE",
      type: "BUY",
      tradeType: "Live",
      entry: "145.00",
      exit: "138.50",
      qty: "100",
      pnl: "₹-650.00",
      status: "Closed",
      time: "06/03/2026, 11:02:34"
    }
  ]
};