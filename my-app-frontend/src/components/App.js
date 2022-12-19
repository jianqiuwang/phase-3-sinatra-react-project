import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import NewListingCards from "./NewListingCards";

function App() {
  const [cards, setCards]=useState([])
  const [search, onSearch]=useState("")
  useEffect(()=>{
    fetch("http://localhost:9292/listings")
    .then(resp=>resp.json())
    .then(cards=>setCards(cards))
  },[])

  function handleAddCard(newCard) {
    setCards([...cards, newCard]);
  }

  function handleDeleteCard(deletedCard){
    const updatedCards=cards.filter((card)=>card.id !== deletedCard.id)
    setCards(updatedCards)
  }

  function handleUpdateCard(updatedCardObj) {
    const updatedCards = cards.map((card) => {
      if (card.id === updatedCardObj.id) {
        return updatedCardObj;
      } else {
        return card;
      }
    });
    setCards(updatedCards);
  }

  const cardDisplay=cards.filter((card)=>card.description.toLowerCase().includes(search.toLowerCase()))
  console.log(cards)
  console.log(cardDisplay)

  return (
    <div className="app">
      <Header onSearch={onSearch}/>
      <ListingsContainer cards={cardDisplay} handleDeleteCard={handleDeleteCard} onUpdateCard={handleUpdateCard}/>
      <NewListingCards onAddCard={handleAddCard}/>
    </div>
  );
}

export default App;

