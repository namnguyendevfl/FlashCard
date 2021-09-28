import React, {useState, useEffect} from "react"
import {Switch,Route, useRouteMatch} from "react-router-dom"
import { readDeck } from "../utils/api/index.js"
import AddCard from "./AddCard/AddCard"
import EditCard from "./EditCard/EditCard"
import DeckView from "./DeckView"
import EditDeck from "./EditDeck/EditDeck"
import StudyDeck from "./StudyDeck/StudyDeck"

function Deck ({decks, setDecks}) {
    //We got the Id from link  
    //We need to call all the cards
    const [deck,setDeck] = useState({});
    const [cards,setCards] = useState([]);
    const {path, params:{deckId}}  = useRouteMatch();

    useEffect(() => {
        const abortController = new AbortController();
        const loadDeck = async () => {
        const response = await readDeck(deckId,abortController.signal);
        setDeck(response);
        }
        loadDeck();
        return () => abortController.abort();
    },[deckId]);
    
    return <div className ="container">
           
    {/* Create Route for the deckview */} 

    <Switch>
        {/* Create a Route for the Deck View with the path /decks/:deckId */}
        <Route exact path={path}>
            <DeckView deck = {deck} cards = {cards} setCards = {setCards} decks = {decks} setDecks = {setDecks}/>
        </Route>
        {/* Create a Route for the StudyBtn */}
        <Route path={`${path}/study`}>
            <StudyDeck decks = {decks} deck ={deck} cards ={cards} setCards ={setCards} />
        </Route>
        {/* Create a Route for the deck edit Btn */}
        <Route path={`${path}/edit`}>
            <EditDeck deck = {deck} setDeck={setDeck}/>           
        </Route>
        {/* Create a Route for the card */}
        <Route path={`${path}/cards/new`}>
            <AddCard deck = {deck} cards = {cards} setCards ={setCards}/>
        </Route>                
        <Route path={`${path}/cards/:cardId/edit`}>
            <EditCard deck = {deck} cards = {cards} setCards ={setCards}/>
        </Route> 
    </Switch>


        </div>
    }
export default Deck