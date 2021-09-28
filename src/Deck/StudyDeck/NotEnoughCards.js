import React from "react"
import AddCardBtn from "../AddCardBtn";

export default function NotEnough({cards, deck}) {
    return <>
    <h3>Not enough cards.</h3>
    {cards.length > 1
    ? <p> You need at least 3 cards to study. There are {cards.length} cards in this deck</p>
    : <p> You need at least 3 cards to study. There is {cards.length} card in this deck</p>
    }
    <AddCardBtn deck = {deck} cards = {cards}/>
    </>
}