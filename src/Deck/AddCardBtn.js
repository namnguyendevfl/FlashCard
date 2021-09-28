import React from "react"
import {Link} from "react-router-dom"
export default function AddCardBtn ({deck}) {
    //Create Create Deck btn with the link "/decks/new"
    return <Link to={`/decks/${deck.id}/cards/new`}> 
        <button className="btn btn-primary">
            <span className = "oi oi-plus" style ={{color:"white"}}/> {"  "} Add Cards</button>
        </Link>
} 