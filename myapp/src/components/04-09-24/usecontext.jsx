// import React, { useReducer } from 'react'
// import { createContext } from 'react';


// export const Authcon=createContext();
// function reducer(state,action){
//     switch(action.type){
//         case "INCREMENT":
//             return{counter:state.counter+1}
        
//         case "DECREMENT":
//             return{counter:state.counter-1}

//         case "RESET":
//             return{counter:0}
    

        


//     }

// }
// const initialstate={counter:0};


// const Usecontext = ({children}) => {
//     const[state,dispatch]=useReducer(reducer,initialstate)
//   return (
//     <div>
//         <Authcon.Provider value={{state,dispatch}}>
//             {children}
//         </Authcon.Provider>
      
//     </div>
//   )
// }

// export default Usecontext;