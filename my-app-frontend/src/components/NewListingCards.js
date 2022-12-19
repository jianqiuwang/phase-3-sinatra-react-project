import React, { useState } from "react";

function NewListingCards({ onAddCard }) {

const [description, setDescription] = useState("")
const [image, setImage] = useState("")
const [location, setLocation] = useState("")
const [price, setPrice] = useState(0)

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:9292/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description:description,
        image:image,
        location:location,
        price:price
      }),
    })
      .then((r) => r.json())
      .then((newCard) => {
        onAddCard(newCard);
      });
  }

  return (
    <form className="new-card" onSubmit={handleSubmit}>
      <input className="input" type="text" name="description" placeholder="description" onChange={(e)=>setDescription(e.target.value)}/>
      <input className="input" type="text" name="image" placeholder="image URL" onChange={(e)=>setImage(e.target.value)}/>
      <input className="input" type="text" name="location" placeholder="location" onChange={(e)=>setLocation(e.target.value)}/>
      <input className="input" type="number" name="price" placeholder="price" onChange={(e)=>setPrice(e.target.value)}/>
      <button className="input" type="submit">Submit</button>
    </form>
  );
}

export default NewListingCards;