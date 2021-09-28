import React, {useState, useEffect } from "react";
import {useHistory} from "react-router-dom";
import {createDeck} from "../utils/api";
export default function CreateDeckForm({decks, setDecks}) {
    const initialFormState = {
        name: "",
        description: ""
    };
    //Create a newDeck state variable
    const [newDeck, setNewDeck] = useState({...initialFormState});
    const newDecks = decks;
    const history = useHistory();

    //Update any change made in the textarea fields
    const handleChange = ({target}) => {
        console.log(Array.isArray(decks)) //To check sthing is an Arr
        setNewDeck({...newDeck,
            [target.name] : target.value,
        });
    }; 
     
    useEffect (() => {
        setNewDeck(newDeck)
            },
    [newDeck]);

    const handleCancel = () => {
        history.push(`/`);
        };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const abortController = new AbortController();
        const postDeck = async () => {
            //Call CreateDeck function to post formData
            const response = await createDeck(newDeck, abortController.signal)
            //Response is an Obj of a Deck
            newDecks.push(response)
            setDecks(()=>newDecks)
            //After form submitted, it'll bring you to the DeckViewRoute
            history.push(`/decks/${response.id}`);
            };
        postDeck();
        setNewDeck(initialFormState);
        return () => abortController.abort();
      };

    //   const handleSubmit = async (event) => {
    //       event.preventDefault();
    //       const abortController = new AbortController();
    //       const postDeck = async () => {
    //           try {
    //           const response = await fetch(url, 
    //               {
    //                   method: "POST",
    //                   headers: {
    //                       'Content-Type': 'application/json',
    //                     },
    //                   body: JSON.stringify(newDeck),
    //                   signal: abortController.signal
    //               })
    //               newDecks.push(response)
    //               setDecks(()=>newDecks)
    //               console.clear()      
    //               console.log(decks)          
    //           const savedData = await response.json();
    //           //Get the id for the deck
    //           console.log(savedData.id)
    //           history.push(`/decks/${savedData.id}`);
    //           console.log(history)
    //           console.log("Saved user!", decks);
    //           }catch(err) {
    //               if (err.name = "AbortError") console.log("Aborted")
    //               throw err
    //           }
    //       }
    //       postDeck()
    //       setNewDeck(initialFormState)
    //     };

return <form onSubmit={handleSubmit}>
<div className = "w-100">
    <div className = "pb-0">
        <label htmlFor="name" className ="w-100" >
        <div className="pb-2">Name </div>
        <input 
            id = "name"
            type = "text"
            name = "name"
            className ="w-100 form-control" 
            style = {{height:"40px"}}
            placeholder ="Deck Name"
            onChange = {handleChange}
            value = {newDeck.name}
            />
        </label>
    </div>
    <div className = "py-0">
        <label htmlFor="Description" className ="w-100">
        <div className="pb-2 pt-3">Description</div>
        <textarea
            id = "Description"
            type = "text"
            name = "description"
            className ="w-100 form-control" 
            style = {{height:"100px"}}
            placeholder ="Brief description of the deck"
            onChange = {handleChange}
            value = {newDeck.description}
            />
        </label>
    </div>
</div>
<div className= "py-2">
    <button onClick ={handleCancel}
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