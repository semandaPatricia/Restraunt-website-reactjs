import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const CartItems = (props) => {
  const { name, price, image, category } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

    return (
        <div>
     <div className="cartItem flex items-center m-8 ">
          <img src={image} />
          <div className="description">
            <p>
              <b>{category}</b>
            </p>
            <p> Price: ${price}</p>
            <p> {category}</p>
            <div className="countHandler">
              <button onClick={() => removeFromCart(name)}> - </button>
              <input
                value={cartItems[name]}
                onChange={(e) => updateCartItemCount(Number(e.target.value), name)}
              />
              <button onClick={() => addToCart(name)}> + </button>
            </div>
          </div>
        </div>
        </div>
      )
    }
  


export default CartItems;
