import React, { useState } from "react";
import AnotherComponent from "./AnotherComponent";
import AnotherComponent2 from "./AnotherComponent2";

const Memo = () => {
    const[counter,updatecounter]=useState(50)
    const[counterz,updatecounter2]=useState(100)

    const[counternew,updatecounternew]=useState(51)
    const[counternew2,updatecounternew2]=useState(101)

  return (
    <div>
        
        <AnotherComponent counter={counter}/>
        <h1>Decrement  :{counter}</h1>
        <button onClick={()=>{updatecounter(counter-1)}}>-</button>
        <h1>Decrement  2 :{counterz}</h1>
        <button onClick={()=>{updatecounter2(counterz-1)}}>-</button>
        
       

        <AnotherComponent2 counternew={counternew}/>
        <h1>Increment :{counternew}</h1>
        <button onClick={()=>{updatecounternew(counternew+1)}}>+</button>
        <h1>Increment 2 :{counternew2}</h1>
        <button onClick={()=>{updatecounternew2(counternew2+1)}}>+</button>

        
      
    </div>
    
  );
};

export default Memo;