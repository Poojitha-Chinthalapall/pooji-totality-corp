import React from "react";
import "./Cart.css";

const Cart = ({ cartItems, removeFromCart }) => (
  <div className="cart">
    {cartItems.map((item) => (
      <div key={item.id} className="cart-item">
        <h4>{item.title}</h4>
        <p>${item.price}</p>
        <button onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    ))}
  </div>
);

export default Cart;
