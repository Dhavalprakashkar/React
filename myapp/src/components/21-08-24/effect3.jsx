import { useState,useEffect } from "react";

function Useeffect3(){

    const[counter1,counterchange]=useState(0);
    const[counter2,counterchange1]=useState(0);

    function increment(){
        counterchange(counter1 + 1);

    }
    function increment1(){
        counterchange1(counter2 + 1);

    }
    
    useEffect( ( ) => { console.log( "Use Effect3" ) } , [ counter1, counter2 ] )


    return(

        <>
        <h1>Counter:{counter1}</h1>
        <button onClick={increment}>Increment</button>
        <h1>Counter:{counter2}</h1>
        <button onClick={increment1}>Increment</button>
       

        </>


    )
}

export default Useeffect3;