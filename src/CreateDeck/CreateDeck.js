import React from "react"
import BreadCrumb from "../BreadCrumb/BreadCrumb"
import CreateDeckForm from "./CreateDeckForm"

function CreateDeck ({decks, setDecks}) {
return <div className ="container">
        <div>
            <BreadCrumb/>
        </div>
        <div>
            <CreateDeckForm decks={decks} setDecks={setDecks}/>
        </div> 
    </div>
}

export default CreateDeck