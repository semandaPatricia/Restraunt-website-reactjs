import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";


export const Product = (props) => {
  const { name,price,image,category} = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[name];

  return (
    <div className="product">
      <img src={image} />
      <div className="description">
        <p> {name}</p>
        <p> ${price}</p>
        <p> {category}</p>
        

      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};