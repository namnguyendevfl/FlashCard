import React from "react"
import StudyBtn from "./StudyBtn";
import TrashDeckBtn from "./DltDeckBtn";
import ViewBtn from "./ViewBtn";

export default function EachDeck({deck, decks, setDecks}) {
  const {cards, id} = deck;
    return (
        <div className = "border border-dark p-2 my-2">
          <div className ="row w-100">
            <div className ="col">
              <h2>{deck.name}</h2> 
            </div>
            <div className ="float-end">
            {cards
            ? <p className ="float-end"> {cards.length} cards</p>
            : <p className ="float-end"> 0 cards</p>}
            </div>
            
          </div>
         
          <p> {deck.description} </p>
          <div className = "row w-100 ">
            <div className ="col"> 
          {/* Create the "CreateDeckBtn" component returning a Link component to navigate to the View Deck part with URL of /decks/:deckId */}
            <ViewBtn deck ={deck}/>
         
          {/* Create a Study btn with the link to  */}
            <StudyBtn deck ={deck}/>
            
            </div> 
           {/* Create a trash btn with the link to  */}  
            <div className = "float-end">
              <TrashDeckBtn deckId = {id} decks ={decks} setDecks ={setDecks}/>
            </div>
          </div>
        </div>
        )

}