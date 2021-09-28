import React, {useState, useEffect} from "react"
import {useRouteMatch, useHistory} from "react-router-dom"
import BreadCrumb from "../../BreadCrumb/BreadCrumb"
import {readDeck } from "../../utils/api/index";
import NotEnough from "./NotEnoughCards";
export default function StudyDeck({decks, deck}) {
    const {params:{deckId}} = useRouteMatch();
    //We have to fetch data from API in order to get cards
    const deckIdInNum = parseInt(deckId);
    let tempCards = [];
    const history = useHistory()
    if (deck.cards !== undefined) tempCards = deck.cards;

    const [cards, setCards] = useState([...tempCards])
    useEffect (() => {
        const abortController = new AbortController();
        const cardList = async () => {
            const response = await readDeck(deckIdInNum,abortController.signal)
            setCards(() => response.cards) 
        };
        cardList();
        return () => abortController.abort();
    },[deck,decks,deckIdInNum]);
    const [nextBtnVisible, setNextBtnVisible] = useState(false)
    const [cardNum, setCardNum] = useState(1)
    const handleCarNum = () => {
        setNextBtnVisible(() => false)
        setCardNum(() => cardNum+1);
        if (cardNum === cards.length) {
            const message = `
            Restart cards?
    
            Click 'cancel' to return the home page`;

            const confirm = window.confirm(message);
            if (confirm === false) history.push('/')
            else setCardNum(() => 1);
        };
    };
    const [front, setFront] = useState(true);
    
    const handleFlip = () => {
        setFront(() => !front);
        setNextBtnVisible(() => true)
    }
    return <>
    <div >
        <BreadCrumb deck = {deck}/>
        <div>
            <h2 className ="text-dark py-3">{deck.name}: Study</h2> 
        </div>
        <div className = "container border border-secondary p-2 my-2"> 
            {cards.length < 3
                ? <NotEnough cards = {cards} deck ={deck}/>
                : <div>
                    <h5>Card {cardNum} of {cards.length}</h5>  
                        <div>
                            {front===true
                            ? <p>{cards[cardNum-1].front}</p>
                            : <p>{cards[cardNum-1].back}</p>}
                        </div>       
                        <div className = "row w-100 ">
                            <div className ="col"> 
                            {/* Create a Flip btn */}
                            <button onClick = {handleFlip} className ="mr-2 btn btn-secondary">
                                Flip
                            </button>
                            {/* Create a Next btn */}
                            { nextBtnVisible === true
                            ? <button onClick = {handleCarNum} className ="btn btn-primary">
                                Next
                            </button>
                            : <> </>}
                            </div> 
                        </div>
                </div>
            }
        </div>
    </div>
    </>
}

    