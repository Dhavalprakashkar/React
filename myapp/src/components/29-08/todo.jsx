import React, {useState} from 'react'

const Todo = () => {
    const[todo,updatedtodo]=useState([]);
    const[state1,updatedstate1]=useState("");
    function assvalue(event){
        updatedstate1(event.target.value);

    }
    function assvaluetoarray(){
        updatedtodo([...todo,state1]);
        updatedstate1("");

    }
  return (
    <div>
        <h1>To do List:</h1>
        {todo.map((ele)=>(
            <h1>{ele}</h1>


        ))}
        <input onChange={assvalue} placeholder='write here' value={state1} ></input><br></br>
        <button onClick={assvaluetoarray} >submit</button>
      
    </div>
  )
}

export default Todo;
