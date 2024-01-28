import { Grid } from "@mui/material";
import React from "react";
import Achievement from "./Achievement";
import MonthlyOverview from "./MonthlyOverview";
import OrderTableView from "../view/OrderTableView";
import ProductTableView from "../view/ProductTableView";
import WeeklyOverview from "./WeeklyOverview";
import TotalEarning from "./TotalEarning";
import BarChartIcon from "@mui/icons-material/BarChart";
import CardStatsVertical from "./CardStatsVertical";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import QueryStatsIcon from "@mui/icons-material/QueryStats";

const AdminDashboard = () => {
  return (
    <div className="p-10">
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Achievement />
        </Grid>
        <Grid item xs={12} md={8}>
          <MonthlyOverview />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <WeeklyOverview />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TotalEarning />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <CardStatsVertical
                stats="$25.6k"
                icon={<BarChartIcon />}
                color="success"
                trendNumber="+42%"
                title="Total Profit"
                subtitle="Weekly Profit"
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatsVertical
                stats="$78"
                title="Refunds"
                trend="negative"
                color="secondary"
                trendNumber="-15%"
                subtitle="Past Month"
                icon={<AttachMoneyIcon />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatsVertical
                stats="862"
                trend="negative"
                trendNumber="-18%"
                title="New Orders"
                subtitle="Weekly Orders"
                icon={<BusinessCenterIcon />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatsVertical
                stats="15"
                color="warning"
                trend="negative"
                trendNumber="-18%"
                subtitle="Last Week"
                title="Sales Queries"
                icon={<QueryStatsIcon />}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <OrderTableView />
        </Grid>
        <Grid item xs={12} md={6}>
          <ProductTableView />
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminDashboard;
