import { Grid } from "@mui/material";
import React from "react";
import Achievement from "./Achievement";
import MonthlyOverView from "./MonthlyOverView";
import ProductsTable from "./ProductsTable";
import OrderTableView from "../view/OrderTableView";
import ProductTableView from "../view/ProductTableView";

const AdminDashboard = () => {
  return (
    <div className="p-10">
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <div className="shadow-lg shadow-gray-600">
            <Achievement />
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <div className="shadow-lg shadow-gray-600">
            <MonthlyOverView />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="shadow-lg shadow-gray-600">
            <OrderTableView />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="shadow-lg shadow-gray-600">
            <ProductTableView />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminDashboard;
