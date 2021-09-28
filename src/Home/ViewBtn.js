import React from "react"
import {Link} from "react-router-dom"
export default function ViewBtn({deck}) {
return  <Link to={`/decks/${deck.id}`}>   
            <button className ="mr-2 btn btn-secondary">
                <span className = "oi oi-eye" /> {"  "}View
            </button>
        </Link>
}