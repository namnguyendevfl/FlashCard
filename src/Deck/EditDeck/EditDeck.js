import React from "react"
import EditDeckForm from "./EditDeckForm"
import BreadCrumb from "../../BreadCrumb/BreadCrumb";
function EditDeck ({deck, setDeck}) {
    return <div className ="container">
            <div>
                <BreadCrumb deck = {deck}/>
            </div>
            <div>
                <EditDeckForm deck={deck} setDeck={setDeck}/>
            </div> 
        </div>
    }
    export default EditDeck



