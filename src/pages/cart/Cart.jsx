import React from "react";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { useNavigate } from "react-router-dom";
import { foodList} from "../../data/data";
import { CartItems } from "./CartItems";

const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div>
      <div className="cart flex flex-col justify-center items-center">
        <div>
          <h1 className="text-xl">Your Cart Items</h1>
        </div>

        <div>
          {foodList.map((foodList) => {
            if (cartItems[foodList.name] !== 0) {
              return <CartItems data={foodList} />;
            }
          })}
        </div>

        {totalAmount > 0 ? (
          <div className="checkout">
            <p>Subtotal:${totalAmount} </p>
            <button
              className="bg-gray-500 text-white border-r-4 m-2 cursor-pointer w-40 h-12"
              onClick={() => {
                checkout();
                navigate("/checkout");
              }}
            >
              {" "}
              Checkout{" "}
            </button>
          </div>
        ) : (
          <h1>Your shopping cart is empty</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
