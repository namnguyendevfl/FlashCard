
import React, { useEffect} from "react";
import { listCards } from "../utils/api/index";
import { useRouteMatch } from "react-router";
import EachCard from "./EachCard";

export default function CardList({deck, cards, setCards}) {
    const cardList = deck.cards && deck.cards.map((card,index) => 
    <div> 
        <EachCard key = {index} deck = {deck} card ={card} cards ={cards} setCards={setCards}/>
   </div>
    );
    return <div>
        <h2>Cards</h2>
        {cardList}</div>       
}