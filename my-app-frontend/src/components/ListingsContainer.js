import React from "react";
import ListingCard from "./ListingCard";


function ListingsContainer({cards, handleDeleteCard, onUpdateCard, reviews, onAddReview}) {

  
  const cardsArray=cards.map((card)=><ListingCard key={card.id} reviews={reviews} card={card} onDeleteCard={handleDeleteCard} onUpdateCard={onUpdateCard} onAddReview={onAddReview}/>)

  return (
    <main>
      <ul className="cards">
        {cardsArray}

      </ul>
    </main>
  );
}

export default ListingsContainer;
