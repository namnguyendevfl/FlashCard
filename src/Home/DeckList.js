import React from "react"
import { useEffect} from "react";
import {listDecks} from "../utils/api"
import EachDeck from "./EachDeck";

export default function DeckList({decks, setDecks}) {
    //Using listDecks function to get the list of Decks from Deck server via fetch API data
    useEffect (() => {
        const abortController = new AbortController();
        const deckList = async () => {
            const response = await listDecks(abortController.signal);
            setDecks(response); 
        }
        deckList();
        return () => abortController.abort();
    },[setDecks]);

    //Using map to return each Deck from the "decks" Arr and pass deck, decks, setDeck to it
    const deckList = decks.map((deck,index) => 
    <div> 
        <EachDeck key = {index} deck ={deck} decks ={decks} setDecks = {setDecks}/>
    </div>
    ); 
    return <div>
        {deckList}
        </div>       
}