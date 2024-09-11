import React from "react";

const PropDrilling=({students,counter,Increase})=>     { 
    console.log(students,"students");
return(
    <div>
       <h1> Counter:{counter}</h1>
       <button onClick={Increase}>+</button>
        </div>
)


};
export default PropDrilling;