import React, {useState, useEffect } from "react";
import {useHistory, useRouteMatch} from "react-router-dom";
import {updateDeck, readDeck} from "../../utils/api";
export default function EditDeckForm({deck, setDeck}) {
    const {params:{deckId}} = useRouteMatch();
    const history = useHistory();
    const handleChange = ({target}) => setDeck({...deck,[target.name]:target.value});
    useEffect (() => setDeck(()=>deck),[deck,setDeck]);

    const handleCancel = () =>{
        const abortController = new AbortController();
        const loadDeck = async () => {
        const response = await readDeck(deckId,abortController.signal);
        setDeck(response);
        }
        loadDeck();
        history.push(`/decks/${deckId}`)
        return () => abortController.abort()};
        
    const handleSubmit = (event) => {
        event.preventDefault();
        const abortController = new AbortController();
        const updateEditDeck = async () => {
            //Call CreateDeck function to post formData
            const response = await updateDeck(deck, abortController.signal);
            setDeck(() => response);
            history.push(`/decks/${deckId}`);
        };
        updateEditDeck();
        return () => abortController.abort();
    }





return <form onSubmit={handleSubmit}>
<div className = "w-100">
    <div className = "pb-0">
        <label htmlFor="name" className ="w-100" >
        <div className="pb-2">Name </div>
        <textarea 
            id = "name"
            type = "text"
            name = "name"
            className ="w-100 form-control" 
            style = {{height:"40px"}}
            onChange = {handleChange}
            value = {deck.name}
            />
        </label>
    </div>
    <div className = "py-0">
        <label htmlFor="description" className ="w-100">
        <div className="pb-2 pt-3">Description</div>
        <textarea
            id = "description"
            type = "text"
            name = "description"
            className ="w-100 form-control" 
            style = {{height:"100px"}}
            onChange = {handleChange}
            value = {deck.description}
           
            />
        </label>
    </div>
</div>
<div className= "py-2">
    <button onClick = {handleCancel}
            className ="mr-2 btn btn-secondary">
            Cancel
    </button>
    <button type = "submit"
    className ="btn btn-primary">
            Submit
    </button>
</div>
</form>
}