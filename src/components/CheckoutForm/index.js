import React, { useState } from "react";
import "./CheckoutForm.css";

const CheckoutForm = ({ handleSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    payment: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form className="checkout-form" onSubmit={(e) => handleSubmit(e, formData)}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="payment"
        placeholder="Payment Info"
        onChange={handleChange}
        required
      />
      <button type="submit">Checkout</button>
    </form>
  );
};

export default CheckoutForm;
