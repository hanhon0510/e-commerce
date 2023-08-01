import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import { Button } from "@mui/material";
import CartItem from "../Cart/CartItem";

const OrderSummary = () => {
  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md">
        <AddressCard />
      </div>

      <div>
        <div className="lg:grid grid-cols-3 relative">
          <div className="col-span-2">
            {[1, 1, 1, 1].map((item) => (
              <CartItem />
            ))}
          </div>
          <di className="px-5 sticky top-0 h=[100vh] mt-5 lg:mt-0">
            <div className="border">
              <p className="uppercase font-semibold opacity-60 pb-4">
                Price details
              </p>
              <hr />
              <div className="space-y-3 font-semibold mt-10">
                <div className="flex justify-between pt-3 text-black">
                  <span>Price:</span>
                  <span>363$</span>
                </div>
                <div className="flex justify-between pt-3 ">
                  <span>Discount:</span>
                  <span className="text-green-600">63$</span>
                </div>
                <div className="flex justify-between pt-3 ">
                  <span>Ship fee:</span>
                  <span className="text-green-600">3$</span>
                </div>
                <div className="flex justify-between font-bold pt-3">
                  <span>Total:</span>
                  <span className="text-green-600">613$</span>
                </div>
              </div>
              <Button
                color="secondary"
                variant="contained"
                className="w-full mt-5"
                sx={{ px: "2.5rem", py: "0.7rem" }}
              >
                Checkout
              </Button>
            </div>
          </di>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
