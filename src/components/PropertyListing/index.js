import React from "react";
import "./PropertyListing.css";

const PropertyListing = ({ property, addToCart }) => (
  <div className="property-listing">
    <img src={property.image} alt={property.title} />
    <h3>{property.title}</h3>
    <p>{property.description}</p>
    <p>${property.price}</p>
    <button onClick={() => addToCart(property)}>Add to Cart</button>
  </div>
);

export default PropertyListing;
