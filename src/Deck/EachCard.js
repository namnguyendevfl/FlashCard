import React from "react"
import CardTrashBtn from "./DeleteCard/DltCardBtn";
import EditCardBtn from "./EditCard/EditCardBtn";
export default function EachCard({
    card:{ id, front, back }
    , cards, setCards, deck}) {
    return <>
        <div className = "card container">
          <div className ="row w-100">
            <div className ="col">
              <p>{front}</p> 
            </div>
            <div className ="col">
              <p>{back}</p> 
            </div>
          </div>
          <div className = "row w-100 ">
            <div className = "col"></div>
            <div className = "float-end">
                <EditCardBtn id ={id} deck ={deck}/>
                <CardTrashBtn cards = {cards} setCards = {setCards} deck = {deck} cardId = {id}/>
            </div>
          </div>
        </div>
      </>
}