import React from "react"
import { deleteCard,listCards } from "../../utils/api";
import { useRouteMatch, useHistory } from "react-router-dom";

export default function CardTrashBtn (prop) {
    const cardId = parseInt(prop.cardId);
    const deckId= prop.deck.id;
    const {url} = useRouteMatch();
    const history = useHistory();
    const handleDelete = () => {
        const abortController = new AbortController();
        const cardDelete = () => {
            const dltCard = deleteCard(cardId,abortController.signal);
            dltCard.then(() => listCards(deckId, abortController.signal)
                                .then((response) => prop.setCards(() => response)));
        };
        const message = `
            Delete this card?
                        
            You will not be able to recover it.`;
        const confirm = window.confirm(message);
        if (confirm === false) history.push(`${url}`);
        else cardDelete();
        return () => abortController.abort();
    };    
    return <button  className="btn btn-danger"
                    onClick = {handleDelete}                        >
                <span
                    className = "oi oi-trash"
                />
            </button>
}