import React from "react";
import { useState,useEffect } from "react";



function NewPlantForm() {
  const [name, setName ] = useState ("");
  const [image, setImage ] = useState ("");
  const [price, setPrice ] = useState ("");
  const [submit, setSubmit ] = useState (false);
  const [plants, setPlants] = useState([]);
  function handleNameChange(event){
    setName(event.target.value)
   
  }
  function handleImageChange(event){
    setImage(event.target.value)
  }
  function handlePriceChange(event){
    setPrice(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault()
    setSubmit(true)
  }
  useEffect(() => {
   const plantObject = {
      name,
      image,
      price
    }
    if (submit){
      fetch('http://localhost:6001/plants',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(plantObject)
      })
      .then(res => res.json())
      .then(data => {
        setPlants(data)
       
      })    
    }


  },[submit])


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={handleNameChange} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleImageChange} value={image} type="text" name="image" placeholder="Image URL" />
        <input onChange={handlePriceChange} value={price} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
     
    </div>
    
  );
}

export default NewPlantForm;
