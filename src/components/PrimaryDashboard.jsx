import React from "react";
import { Grid, Paper, Typography } from "@mui/material";

const PrimaryDashboard = ({ data }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Paper elevation={3} style={{ padding: "16px" }}>
          <Typography variant="h5">Total Revenue</Typography>
          <Typography variant="h6">${data.totalRevenue}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper elevation={3} style={{ padding: "16px" }}>
          <Typography variant="h5">Total Sales</Typography>
          <Typography variant="h6">{data.totalSales}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default PrimaryDashboard;