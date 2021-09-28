// import BreadCrumb from "./BreadCrumb"
import React, {useState, useEffect} from "react"
import EditCardForm from "./EditCardForm"
import {useRouteMatch} from "react-router-dom"
import {readCard } from "../../utils/api"
import BreadCrumb from "../../BreadCrumb/BreadCrumb"

function EditCard({deck, cards}) {
    const [card,setCard] = useState({});
    const {params:{cardId}}  = useRouteMatch();
    useEffect(() => {
        const abortController = new AbortController();
        const loadCard = async () => {
            const response = await readCard(cardId,abortController.signal)
            setCard(response)
        };
        loadCard();
        return () => abortController.abort();
    }, [cardId]);

    return <div className ="container">
            <div>
                <BreadCrumb deck = {deck} cards = {cards}/>
            </div>
            <div>
                <EditCardForm card={card} setCard={setCard}/>
            </div> 
        </div>
    }
    
    export default EditCard