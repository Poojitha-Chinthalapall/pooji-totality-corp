import React from "react";
import "./PropertyFilter.css";

const PropertyFilter = ({ filters, setFilters }) => {
  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="property-filter">
      <select name="location" onChange={handleFilterChange}>
        <option value="">Location</option>
        <option value="California">California</option>
        <option value="Florida">Florida</option>
      </select>
      <select name="bedrooms" onChange={handleFilterChange}>
        <option value="">Bedrooms</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <select name="price" onChange={handleFilterChange}>
        <option value="">Price</option>
        <option value="100">Up to $100</option>
        <option value="200">Up to $200</option>
        <option value="300">Up to $300</option>
      </select>
    </div>
  );
};

export default PropertyFilter;
