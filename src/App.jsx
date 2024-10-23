import React from "react";
import Sidebar from "./components/Sidebar";
import PrimaryDashboard from "./components/PrimaryDashboard";
import TransactionBar from "./components/TransactionBar";
import { mockTransactions } from "./components/MockData";

function App() {
  const totalRevenue = mockTransactions.reduce(
    (acc, item) => acc + parseFloat(item.cost),
    0
  );

  const totalSales = mockTransactions.length;

  return (
    <div>
      <Sidebar />
      <div style={{ marginLeft:  "240px", padding: "20px" }}>
        <PrimaryDashboard data={{ totalRevenue, totalSales }} />
        <TransactionBar />
      </div>
    </div>
  );
}

export default App;
