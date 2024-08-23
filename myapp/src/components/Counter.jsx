import { useState } from "react";

function Counter() {
    const [counter, updatecounter] = useState(1)

    function Increment(){
        updatecounter(counter +1)

    }
    
    function Decrement(){
        if (counter > 0) {
            updatecounter(counter - 1);
    }
}

    function Reset(){
        updatecounter(0)
    }




    return <>
        <h1>Counter={counter}</h1>
        <button onClick={Increment}>+</button>
        <button onClick={Decrement}>-</button>
        <button onClick={Reset}>Reset</button>


    </>
}

export default Counter;