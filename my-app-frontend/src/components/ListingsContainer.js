import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({cards, handleDeleteCard, onUpdateCard}) {
  
  const cardsArray=cards.map((card)=><ListingCard key={card.id} card={card} onDeleteCard={handleDeleteCard} onUpdateCard={onUpdateCard}/>)

  return (
    <main>
      <ul className="cards">
        {cardsArray}
      </ul>
    </main>
  );
}

export default ListingsContainer;
