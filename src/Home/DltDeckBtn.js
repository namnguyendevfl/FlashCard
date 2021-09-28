import React from "react"
import { useHistory } from "react-router";
import { deleteDeck, listDecks } from "../utils/api"

export default function TrashDeckBtn ({deckId, decks, setDecks}) {
    const history = useHistory();
    const handleDeckDelete = () => {
        const abortController = new AbortController();
        const deckDlt = () => {
            const deckDelete = deleteDeck (deckId, abortController.signal);
            deckDelete.then(() =>   listDecks(abortController.signal)
                                    .then((response) => setDecks(() => response)));
        };
        const message = `
            Delete this deck?
                    
            You will not be able to recover it.`;
        const confirm = window.confirm(message);
        if (confirm === false) history.push(`/`);
        else deckDlt();
        return () => abortController.abort();
    };
    return <button  className="btn btn-danger"   
                    onClick = {handleDeckDelete}>
                <span className = "oi oi-trash"/>
            </button>
}