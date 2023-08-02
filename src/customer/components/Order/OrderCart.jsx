import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";

const OrderCart = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/account/order/${5}`)}
      className="p-5 shadow-md shadow-black hover:shadow-2xl border"
    >
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover"
              src="https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/i/a/z/4xl-white-vtexx-original-imagnzecssjs3y9g.jpeg?q=70"
              alt=""
            />
            <div className="space-y-2 ml-5">
              <p className="">
                Men Regular Fit Solid Cut Away Collar Formal Shirt
              </p>
              <p className="opacity-50 text-xs font-semibold">Size: L</p>
              <p className="opacity-50 text-xs font-semibold">Color: White</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>192$</p>
        </Grid>
        <Grid item xs={4}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 mr-2"
                />
                <span>Delivered on 11/11/2212</span>
              </p>
              <p className="text-xs">Your item has been delivered</p>
            </div>
          )}
          {false && (
            <p>
              <span>Expected delivery on 11/11/1111</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCart;
