import React, {useState, useEffect} from "react"

function Practice() {
    const [load, setLoad] = useState();
    useEffect(()=>{
        setLoad();
        const url = ""
        const abortController = new AbortController();
        async function loadData() {
            try {
                const response = await fetch(url, abortController.signal)
                const data = await response.json();
                setLoad(data)
            }catch(error){
                if (error.name === "AbortController") console.log("Aborted")
                throw error
            }
        }
        loadData();
        return () => abortController.abort()
    },[load])

    console.log(load)
    return <>
    </>
}

export default Practice 