import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import api from './axios'
import { useNavigate } from 'react-router-dom'



const ViewProducts = () => {
    
    const[state,updatedstate]=useState([])
    useEffect(()=>{
        console.log(state,"state info")

    },[state])


    async function view(){
        try{
            const response=await api.get("/products/view-products")
           if(response.data.success){
            console.log("data fetched succesfully",response.data.allproducts)
            updatedstate(response.data.allproducts)
           
            

           }
           else{
            toast.error(response.data.message)
           }


        }

        catch(error){
            toast.error(error.response.data.message)
        }

    }
  return (
    <div>
       <button onClick={view}>View products</button>
       <div style={{display:"flex",border:"1px solid black",justifyContent:"space-evenly", flexWrap:"wrap", width:"1280px"}}>
       {state.map((item)=>(
        
        <div style={{width:"300px",border:"1px solid black",marginBottom:"5px"}}>
            <img height="180px" width="150px"  src={item.Image}></img>
            <h1>Category:{item.Category}</h1>
            <h1>Name:{item.Name}</h1>
            <h1>Price:{item.Price}</h1>
            <h1>Quantity:{item.Quantity}</h1>


        </div>
        

       ))}
       </div>

      
    </div>
  )
}

export default ViewProducts