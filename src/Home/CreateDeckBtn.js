import React from "react"
import {Link} from "react-router-dom"
export default function CreateDeckBtn () {
    //Create Create Deck btn with the link "/decks/new"
    return <Link to="/decks/new"> 
            <button className="btn btn-secondary">
                <span className = "oi oi-plus" style ={{color:"white"}}/> {"  "} Create Deck
            </button>
            </Link>
} 
