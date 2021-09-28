import React, {useEffect } from "react";
import {useHistory, useRouteMatch} from "react-router-dom";
import {updateCard} from "../../utils/api";
export default function EditCardForm({card, setCard}) {
    const {params:{deckId}} = useRouteMatch();
    const history = useHistory();
    const handleChange = ({target}) => setCard({...card,[target.name]:target.value});
    useEffect (() => setCard(()=>card),[setCard,card]);
    const handleCancel = () => history.push(`/decks/${deckId}`);
    const handleSubmit = (event) => {
        event.preventDefault();
        const abortController = new AbortController();
        const updateEditCard = async () => {
            //Call CreateDeck function to post formData
            const response = await updateCard(card, abortController.signal);
            setCard(() => response);
            history.push(`/decks/${deckId}`);
        };
        updateEditCard();
        return () => abortController.abort();
    }

return <form onSubmit={handleSubmit}>
<div className = "w-100">
    <div className = "pb-0">
        <label htmlFor="front" className ="w-100" >
        <div className="pb-2">Front </div>
        <textarea 
            id = "front"
            type = "text"
            name = "front"
            className ="w-100 form-control" 
            style = {{height:"40px"}}
            onChange = {handleChange}
            value = {card.front}
            />
        </label>
    </div>
    <div className = "py-0">
        <label htmlFor="back" className ="w-100">
        <div className="pb-2 pt-3">Back</div>
        <textarea
            id = "back"
            type = "text"
            name = "back"
            className ="w-100 form-control" 
            style = {{height:"100px"}}
            onChange = {handleChange}
            value = {card.back}
            />
        </label>
    </div>
</div>
<div className= "py-2">
    <button className ="mr-2 btn btn-secondary" onClick = {handleCancel}>
            Cancel
    </button>
    <button type = "submit"
            className ="btn btn-primary">
            Submit
    </button>
</div>
</form>
}