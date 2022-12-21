import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingCard from "./ListingCard";
import ListingsContainer from "./ListingsContainer";
import ReviewsContanier from "./ReviewsContanier";
import NewListingCards from "./NewListingCards";
import NewReviewForm from "./NewReviewForm";
import { BrowserRouter,Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";

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
      {/* <ListingsContainer cards={cardDisplay} handleDeleteCard={handleDeleteCard} onUpdateCard={handleUpdateCard}/> */}
      {/* <NewListingCards onAddCard={handleAddCard}/> */}

      <BrowserRouter>
      <NavBar/>
           <Switch>
            <Route exact path="/addnewcar">
            <NewListingCards onAddCard={handleAddCard}/>
            </Route>
            <Route excat path="/listings">
            <ListingsContainer cards={cardDisplay} handleDeleteCard={handleDeleteCard} onUpdateCard={handleUpdateCard}/>
            </Route>
            <Route exact path="/reviews">
            <ReviewsContanier/>
            </Route>
            <Route exact path="/addnewreview">
            <NewReviewForm/>
            </Route>
            </Switch>
        </BrowserRouter>
           
    </div>
  );
}

export default App;

