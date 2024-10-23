import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { mockTransactions } from "./MockData";

const columns = [
  { field: "txId", headerName: "Transaction ID", width: 150 },
  { field: "user", headerName: "User", width: 150 },
  { field: "date", headerName: "Date", width: 150 },
  { field: "cost", headerName: "Cost", width: 150 },
];

const rows = mockTransactions.map((transaction, index) => ({
  ...transaction,
  id: `${transaction.txId}-${index}`,
}));

const TransactionBar = () => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default TransactionBar;
