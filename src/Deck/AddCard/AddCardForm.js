import React, {useState, useEffect } from "react";
import {useHistory, useRouteMatch} from "react-router-dom";
import {createCard} from "../../utils/api";
export default function AddCardForm({cards, setCards}) {
    const {params:{deckId}} = useRouteMatch();
    const deckIdInNum = parseInt(deckId);
    const initialFormState = {
        front: "",
        back: "",
    };
    //Create a newDeck state variable
    const [newCard, setNewCard] = useState({...initialFormState});
    const newCards = cards;
    const history = useHistory();
    const [change, setChange] = useState(false);
    //Update any change made in the textarea fields
    const handleChange = ({target}) => {
        console.log(Array.isArray(cards)) //To check sthing is an Arr
        setNewCard({...newCard,
            [target.name] : target.value,
        }); 
        setChange(() => true);
    };
     
    useEffect (() => setNewCard(newCard),[newCard]);

    const cardAdding = () => {
        const abortController = new AbortController();
        const addCard = async () => {
            //Call createCard function to post formData
            const response = await createCard(deckIdInNum, newCard, abortController.signal)
            //Response is an Obj of a Deck
            newCards.push(response);
            setCards(()=>newCards);
            //After form submitted, it'll bring you to the DeckViewRoute
        };
        addCard();
        return () => abortController.abort();
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        cardAdding();
        setNewCard(initialFormState);
        setChange(false);
    };

    const handleDone = () => {   
        if (change) cardAdding();
        history.push(`/decks/${deckIdInNum}`);
    };

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
            placeholder ="Front side of card"
            value = {newCard.front}
            onChange = {handleChange}
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
            placeholder ="Back side of card"
            value = {newCard.back}
            onChange = {handleChange}
            />
        </label>
    </div>
</div>
<div className= "py-2">
    <button onClick ={handleDone}
            className ="mr-2 btn btn-secondary" >
            Done
    </button>
    <button type = "submit"
            className ="btn btn-primary">
            Save
    </button>
</div>
</form>
}