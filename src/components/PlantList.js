// PlantList.js
import React from "react";
import PlantCard from "./PlantCard";
import { useState, useEffect } from "react";

function PlantList({ search }) {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => {
        setPlants(data);
      });
  }, []);

  const filteredPlants = search
    ? plants.filter((plant) => {
        if (plant && plant.name) {
          return plant.name.toLowerCase().includes(search.toLowerCase());
        }
        return false;
      })
    : plants;

  return (
    <ul className="cards">
      {filteredPlants.map((plant, index) => (
        <PlantCard
          key={index}
          image={plant.image}
          name={plant.name}
          price={plant.price}
        />
      ))}
    </ul>
  );
}

export default PlantList;