import React from 'react'
import { useReducer } from 'react'

function reducer(state,action){
    // action={type:"INCREMENT"}
    switch(action.type){
        case "INCREMENT":
            return {counter:state.counter+1}
        case "DECREMENT":
            return {counter:state.counter-1}
        case "RESET":
            return {counter:50}
        default:
            

 

}
}
const initialstate={counter:50}
const Usereducer = () => {
    const[state,dispatch]=useReducer(reducer,initialstate);
    function increment(){
        dispatch({type:"INCREMENT"});


    }
    function decrement(){
        dispatch({type:"DECREMENT"});
        
    }
    function reset(){
        dispatch({type:"RESET"})
        
    }

  return (
    <div>
        <h1>Use reducer</h1>
        <h1>counter:{state.counter}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        
      
    </div>
  )
}


export default Usereducer;