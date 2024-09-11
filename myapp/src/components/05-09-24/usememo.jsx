import React, { useMemo, useState} from 'react'

const Usememo = () => {
    const[counter, setCounter]=useState(1);
    const[todo,updatetodo]=useState(["uuu"])
    const z=useMemo(()=>{
        heavycalculation(counter);

    },[counter])

    function increase(){
        setCounter(counter +1)

    }


    function Add(){
        updatetodo([...todo,"updated"])
    }

  return (
    <div>
        <h1>HeavyCalculation:{z}</h1>
        <h1>Counter:{counter}</h1>
        <button onClick={increase}>+</button>

    {todo.map((tod)=>(
     <h1>{tod}</h1>))}
     <button onClick={Add}>Adding</button>
     </div>
  )
}
function heavycalculation(counter){
    for(var i=0;i<1000000000;i++){
        counter=counter+1;

    }
    return counter;
}


export default Usememo