import React from "react";
import CartItem from "./CartItem";
import { Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  const handleCheckOut = () => {
    navigate("/checkout?step=2");
  };

  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
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
              onClick={handleCheckOut}
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
  );
};

export default Cart;
