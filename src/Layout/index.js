import React, {useState} from "react";
import {Switch,Route} from "react-router-dom"
import Header from "./Header";
import Home from "../Home/HomeView";
import CreateDeck from "../CreateDeck/CreateDeck";
import Deck from "../Deck/Deck"
import NotFound from "./NotFound";

function Layout() {
  //Create decks and setDecks state variables to share decks and setDecks to its child component 
  const [decks, setDecks] = useState([])
  const [deck,setDeck] = useState({});
  const [cards, setCards] = useState([])
  return (
    <div>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}

        {/* Using Switch to render one component */}
        <Switch>
          {/* Render the "home" component in Home/HomeView by default */}
          <Route path = "/" exact>
            <Home decks = {decks} setDecks ={setDecks}/>
          </Route>
          {/* Render the Create Deck component when its path matches the URL decks/new */}
          <Route path ="/decks/new">
            <CreateDeck decks = {decks} setDecks = {setDecks}/>
          </Route>
          {/* Render a Deck component when its path matches the URL decks/${deckId} */}
          <Route path = "/decks/:deckId">
            <Deck decks = {decks} setDecks = {setDecks} 
                  cards = {cards} setCards = {setCards}
                  deck = {deck} setDeck = {setDeck} />
          </Route>
           {/* Render the NotFound component when no other route is matched */}
          <Route path="*">
            <NotFound />
          </Route>
        </Switch> 
      </div>
    </div>
  );
}

export default Layout;
