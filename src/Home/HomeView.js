import React from "react"
import CreateDeckBtn from "./CreateDeckBtn";
import DeckList from "./DeckList";
export default function Home({decks, setDecks}) {
    return <div>
    <div>
        {/* Create the "CreateDeckBtn" component returning a Link component to navigate to the Create Deck part with URL of decks/news */}
        <CreateDeckBtn/>
    </div>
    <div>
       {/*Render a list of decks via DeckList component  */}
        <DeckList decks = {decks} setDecks = {setDecks}/>
    </div>
   </div>
}