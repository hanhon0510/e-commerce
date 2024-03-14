import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsCellIcon from "@mui/icons-material/SettingsCell";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const statsData = [
  {
    value: "245K",
    label: "Sales",
    color: "#E5D68A",
    icon: <TrendingUpIcon style={{ fontSize: "28px" }} />,
  },
  {
    value: "14.5K",
    label: "Customers",
    color: "#22CB5C",
    icon: <AccountCircleIcon style={{ fontSize: "28px" }} />,
  },
  {
    value: "1.22K",
    label: "Products",
    color: "#DE4839",
    icon: <SettingsCellIcon style={{ fontSize: "28px" }} />,
  },
  {
    value: "78K",
    label: "Revenue",
    color: "#12B0E8",
    icon: <AttachMoneyIcon style={{ fontSize: "28px" }} />,
  },
];

function DisplayStats() {
  return statsData.map((stat, index) => (
    <Grid item xs={12} sm={6} md={3} key={index}>
      <Box display="flex" alignItems="center">
        <Avatar
          style={{
            marginRight: "16px",
            backgroundColor: stat.color,
            color: "white",
          }}
        >
          {stat.icon}
        </Avatar>
        <Box>
          <Typography variant="subtitle2">{stat.label}</Typography>
          <Typography variant="h6">{stat.value}</Typography>
        </Box>
      </Box>
    </Grid>
  ));
}

function MonthlyOverview() {
  return (
    <Card className="pt-6">
      <CardHeader
        title="Monthly Overview"
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        subheader="Total 44.5% growth this month"
      />
      <CardContent>
        <Grid container spacing={2}>
          <DisplayStats />
        </Grid>
      </CardContent>
    </Card>
  );
}

export default MonthlyOverview;
