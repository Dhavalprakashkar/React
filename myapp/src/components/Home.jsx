import { useContext } from "react";
import Usecontext, { Authcon } from "./21-08-24/usecontext";

function Home(){
    const{state,dispatch}=useContext(Authcon);
    function increment(){
        dispatch({type:"INCREMENT"})
    };
    function decrement(){
        dispatch({type:"DECREMENT"})
    };
    function reset(){
        dispatch({type:"RESET"})
    };

    return (
        <div>
            <h1>HOME PAGE</h1>
            <h1> Welcome {state?.user?.name} </h1>
            <h1>Counter:{state?.counter}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>RESET</button>

        </div>
    )
}


export default Home;