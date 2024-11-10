// Search.js
import { useState, useEffect } from "react";
import PlantList from "./PlantList";
import PlantCard from "./PlantCard";

function Search() {
  const [search, setSearch] = useState("");
  const [plants, setPlants] = useState([]); 

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  useEffect(() => {
const fetchPlants = () => {
  fetch("http://localhost:6001/plants")
    .then((response) => response.json())
    .then((data) => {
      setPlants(data);
    })
    
};

    setTimeout(fetchPlants, 1000);
  }, [plants]);

  useEffect(() => {
    console.log(search);
  }, [search]);

  return (
    <>
      <div className="searchbar">
        <label htmlFor="search">Search Plants:</label>
        <input
          onChange={handleSearch}
          type="text"
          id="search"
          value={search}
          placeholder="Type a name to search..."
        />
      </div>
      {search === "" ? (
        <ul className="cards">
          
          {plants.map((plant) => (
            <PlantCard
              key={plant.id}
              image={plant.image}
              name={plant.name}
              price={plant.price}
            />
          ))}
        </ul>
      ) : (
        <PlantList search={search} />
      )}
    </>
  );
}

export default Search;

