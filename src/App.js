import React, { useState } from "react";
import "./App.css";
import PropertyListing from "./components/PropertyListing";
import PropertyFilter from "./components/PropertyFilter";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckOutForm";
import properties from "./properties.json";

const App = () => {
  const [filters, setFilters] = useState({
    location: "",
    bedrooms: "",
    price: "",
  });
  const [cart, setCart] = useState([]);

  const addToCart = (property) => {
    setCart([...cart, property]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handleSubmit = (e, formData) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Handle form submission
  };

  const filteredProperties = properties.filter((property) => {
    return (
      (!filters.location || property.location === filters.location) &&
      (!filters.bedrooms || property.bedrooms === parseInt(filters.bedrooms)) &&
      (!filters.price || property.price <= parseInt(filters.price))
    );
  });

  return (
    <div className="App">
      <h1>Property Listings</h1>
      <PropertyFilter filters={filters} setFilters={setFilters} />
      <div className="property-list">
        {filteredProperties.map((property) => (
          <PropertyListing
            key={property.id}
            property={property}
            addToCart={addToCart}
          />
        ))}
      </div>
      <Cart cartItems={cart} removeFromCart={removeFromCart} />
      <CheckoutForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default App;
