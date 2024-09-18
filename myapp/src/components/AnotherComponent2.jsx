import React, { memo } from "react";

const AnotherComponent2 = ({counternew}) => {
    return (
      <div>
          {console.log("Comp 2")}
          <h1>Counter for Increment:{counternew}</h1>
  
          Anothercomponent2
          
        
      </div>
    )
};

export default memo(AnotherComponent2);