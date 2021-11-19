import React from "react"
import EditBtn from "./EditDeckBtn"
import AddCardBtn from "./AddCardBtn"
import StudyBtn from "../Home/StudyBtn"
import TrashDeckBtn from "../Home/DltDeckBtn"
import CardList from "./CardList"
import BreadCrumb from "../BreadCrumb/BreadCrumb"
export default function DeckView({deck, cards, setCards, decks, setDecks}) {    
    const {id} = deck;
    return <div>
        <BreadCrumb deck = {deck}/>
        <h4>{deck.name}</h4>
        <p>{deck.description}</p>
        {/* Create 4 btns here */}
            <div className = "row w-100 ">
                <div className ="col"> 
                {/* Create a View btn with the link to  */}
                    <EditBtn deck ={deck}/>
                {/* Create a Study btn with the link to  */}
                    <StudyBtn deck ={deck} cards ={cards} setCards = {setCards}/>
                    <AddCardBtn deck ={deck}/>
                </div> 
                {/* Create a trash btn with the link to  */}  
                <div className = "float-end">
                    <TrashDeckBtn deckId = {id} deck = {deck} decks = {decks} setDecks = {setDecks}/>
                </div>
            </div>
        {/* Create a list of Cards */}
        <div>
            <CardList cards={cards} setCards={setCards} deck ={deck}/>
        </div>
    </div>
}