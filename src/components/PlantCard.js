import React from "react";
import { useState } from "react";

function PlantCard({image, name,price }) {
  const [inStock, setInStock] = useState(true);
  function handleSetStock(){
    setInStock(!inStock)
  }
  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={handleSetStock} className="primary">In Stock</button>
      ) : (
        <button onClick={handleSetStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
