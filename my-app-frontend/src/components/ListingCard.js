import React,{useState} from "react";

function ListingCard({card, onDeleteCard, onUpdateCard}) {
  const [like, setLike]=useState(false);
  const {id, description, image, location, price } = card;
  const [updatedDescription, setUpdatedDescription] = useState(description)
  const [updatedImage, setUpdatedImage] = useState(image)
  const [updatedLocation, setUpdatedLocation] = useState(location)
  const [updatedPrice,setUpdatedPrice] = useState(price)
  function handleDeleteClick(){
    fetch(`http://localhost:9292/listings/${card.id}`,{
      method: "DELETE",
    })
    .then(resp=>resp.json())
    .then(()=>onDeleteCard(card))
  }

    function handUpdatedForm(e) {
        e.preventDefault();
        fetch(`http://localhost:9292/listings/${card.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            description: updatedDescription,
            image: updatedImage,
            location: updatedLocation, 
            price: updatedPrice
          }),
        })
          .then((r) => r.json())
          .then((updatedCard) => {
            onUpdateCard(updatedCard);
          });
      }

  return (
    <li className="card">
      <div className="image">
        <span className="price">${card.price}</span>
        <img src={card.image} alt={card.description} />
      </div>
      <div className="details">
        {/* <button className={classOfName} onClick={()=>setLike(like=>!like)}>{liked}</button> */}
        {like? (
          <button className="emoji-button favorite active" onClick={()=>setLike(false)}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={()=>setLike(true)}>☆</button>
        )}
        <strong>{card.description}</strong>
        <span> · {card.location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>

        <form onSubmit={handUpdatedForm}>
        <input type="text" name="description" placeholder="new description" onChange={(e)=>setUpdatedDescription(e.target.value)}/>
        <input type="text" name="image" placeholder="new image" onChange={(e)=>setUpdatedImage(e.target.value)}/>
        <input type="text" name="location" placeholder="new location" onChange={(e)=>setUpdatedLocation(e.target.value)}/>
        <input
          type="number"
          step="0.01"
          placeholder="New price..."
        //   value={updatedPrice}
          onChange={(e) => setUpdatedPrice(parseFloat(e.target.value))}
        />
        <button type="submit">update</button>
      </form>
      </div>
    </li>
  );
}

export default ListingCard;
