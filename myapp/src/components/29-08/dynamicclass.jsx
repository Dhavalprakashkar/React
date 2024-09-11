import React, {useState} from 'react'
import "../styles/dynamic.css"

const Dynamicclass = () => {
    const[state1,updatedstate]=useState(false)
    function changestate(){
        updatedstate(!state1)

    }
  return (
    <div  style={{marginTop:"100px"}}>
        
        <br></br>

        <button onClick={changestate} id="main"className= {state1?"active":"notactive"}>{state1 ? "ACTIVE":"NOT ACTIVE"}</button>
      
    </div>
  )
}

export default Dynamicclass;


