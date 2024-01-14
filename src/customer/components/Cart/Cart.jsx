import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../State/Cart/Action";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store);

  const handleCheckOut = () => {
    navigate("/checkout?step=2");
  };

  useEffect(() => {
    dispatch(getCart());
  }, []);

  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {cart.cart?.cartItems.map((item) => (
            <CartItem item={item} />
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
                <span>{cart.cart?.totalPrice}$</span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Discount:</span>
                <span className="text-green-600">{cart.cart?.discount}$</span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Ship fee:</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between font-bold pt-3">
                <span>Total:</span>
                <span className="text-green-600">
                  {cart.cart?.totalDiscountPrice}$
                </span>
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
