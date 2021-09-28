import React from "react"
import {Link} from "react-router-dom"
export default function StudyBtn({deck}) {
return <Link to={`/decks/${deck.id}/study`}> 
          <button className="btn btn-primary mr-2">
            <span className = "oi oi-book"/> {"  "}  Study
          </button>
        </Link>
}