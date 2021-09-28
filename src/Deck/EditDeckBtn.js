import React from "react"
import {Link} from "react-router-dom"
export default function EditBtn({deck}) {
    return <Link to={`/decks/${deck.id}/edit`}>   
            <button className ="mr-2 btn btn-secondary">
                <span className = "oi oi-pencil"/>{"  "}Edit
            </button>
        </Link>
    
}