import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20">
      <div>
        <h1 className="font-bold text-left py-7">Delivery address</h1>
        <AddressCard />
      </div>
      <div className="py-10">
        <OrderTracker activeStep={3} />
      </div>
      <Grid container className="space-x-5">
        <Grid
          item
          container
          className="shadow-xl rounded-md p-5 border"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Grid item xs={6}>
            <div>
              <img
                className="w-[5rem] h-[5rem] object-cover object-top"
                src="https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/f/z/l/m-white-formal-youthfirst-original-imagqjdfgwjfwgsb.jpeg?q=70"
                alt=""
              />
              <div className="space-y-2 ml-5">
                <p>Men Regular Fit Solid Curved Collar Formal Shirt</p>
                <p className="space-x-5">
                  <span>Color: White</span>
                  <span> Size: M</span>
                </p>
                <p>Seller: joe</p>
                <p>100$</p>
              </div>
            </div>
          </Grid>
          <Grid item>
            <Box sx={{ color: "purple" }}>
              <StarBorderIcon
                sx={{ fontSize: "2rem" }}
                className="px-2 text-5xl"
              />
              <span>Rate & Review Products</span>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderDetails;
