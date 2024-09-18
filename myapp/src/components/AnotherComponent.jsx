import React, { memo } from "react";

const AnotherComponent = ({counter}) => {
    return (
      <div>
          {console.log("Comp1")}
          <h1>Counter for Decrement :{counter}</h1>
  
          Anothercomp
          
        
      </div>
    )
};

export default memo(AnotherComponent);