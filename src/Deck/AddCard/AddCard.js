import React from "react"
import BreadCrumb from "../../BreadCrumb/BreadCrumb"
import AddCardForm from "./AddCardForm"

function AddCard ({deck, cards, setCards}) {
return <div className ="container">
        <div>
            <BreadCrumb deck = {deck}/>
        </div>
        <div>
            <AddCardForm cards={cards} setCards={setCards}/>
        </div> 
    </div>
}

export default AddCard