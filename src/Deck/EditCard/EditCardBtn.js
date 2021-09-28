import React from "react"
import {Link} from "react-router-dom"
export default function EditCardBtn({deck, id}) {
    return <Link to={`/decks/${deck.id}/cards/${id}/edit`}>   
            <button className ="mr-2 btn btn-secondary">
                <span className = "oi oi-pencil"/>{"  "}Edit
            </button>
            </Link>
    
}