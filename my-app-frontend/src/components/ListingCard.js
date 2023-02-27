import React,{useState} from "react";
import ReviewCard from "./ReviewCard";
import NewReviewForm from "./NewReviewForm";

function ListingCard({card, reviews, onDeleteCard, onUpdateCard}) {
  const [like, setLike]=useState(false);
  const {description, image, location, price } = card;
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

      const reviewsArray=card.reviews.map((review)=><p key={review.id}>comment: {review.comment}</p>)

      function addReview(){

      }


  return (
    <li className="card">
      <div className="image">
        <span className="price">${card.price}</span>
        <img src={card.image} alt={card.description} />
      </div>
      <div className="details">
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
          placeholder="new price"
          onChange={(e) => setUpdatedPrice(parseFloat(e.target.value))}
        />
        <button type="submit">update</button>
      </form>
      <h3>Create a review</h3>
      <NewReviewForm listing_id={card.id}/>
  
      </div>
      <>
          <h3>Reviews:</h3>
          {reviewsArray}
          {/* <h2>UserName : {review.user_name}</h2>
            <h2>Score : {review.score}</h2>
            <h2>comments: {review.comment}</h2>
            <h2>Description: {review.listing.description}</h2> */}
      </>
    </li>
  );
}

export default ListingCard;
