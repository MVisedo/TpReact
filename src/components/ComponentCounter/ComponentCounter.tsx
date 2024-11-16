import { useState } from "react"


export const ComponentCounter =()=>{
    const [counter,setCounter] = useState<number>(0);

    const incrementarCounter = () =>{
        setCounter((prev)=>prev+1);
    }
    return(
        <div>
            <h2>Contador: {counter}</h2>
            <button onClick={incrementarCounter}>Incrementar</button>
        </div>
    )
}