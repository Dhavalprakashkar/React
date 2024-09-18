import React, { useCallback, useState } from 'react'
import Todos from './Todos'

const Callback = () => {
    const [counter, setCounter]= useState(1);
    const [todos, setTodos] = useState([]);
    // const AddNewTodo=()=>{
    //     setTodos([...todos,"My New Todo"]);
    // };
    const AddNewTodo=useCallback(()=>{
        setTodos([...todos,"My New Todo"])
    },[todos])
    


  return (
    <div>
        <h1> Counter -{counter}</h1>
        <button onClick={()=> setCounter(counter +1)}>+</button>
        <Todos todos={todos} addTodo={AddNewTodo}/>
    </div>
  )
}

export default Callback