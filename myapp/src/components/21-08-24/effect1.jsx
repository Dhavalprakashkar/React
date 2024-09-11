import { useState,useEffect } from "react";

function Useeffect1(){

    const[counter,counterchange]=useState(0);
    function increment(){
        counterchange(counter + 1);

    }
    function decrement(){
        counterchange(counter - 1);

    }
    function reset(){
        counterchange(0)

    }
    useEffect( ( ) => { console.log( "Use Effect1" ) } , [ ] )

    return(

        <>
        <h1>Counter:{counter}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>

        </>


    )
}

export default Useeffect1;