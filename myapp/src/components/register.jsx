import React, { useState } from 'react'


const Register = () => {
  const[state,state2]=useState({
      name:"",
      email:"",
      password:"",
      confirmpass:""

       })
       
      
       

       function value(event){
          state2({...state,[event.target.name]:event.target.value})

          console.log(event.target.value,event.target.name)

       }
      //  console.log(state)
       
      
      
       
return (  
  <div style={{fontSize:"20px",marginTop:"50px",marginLeft:"300px",border:"1px solid black",width:"50%",height:"400px"}}>
      <form autoComplete='off'>
          <label>Name</label><br></br>
          <input onChange={value} autoComplete="new-password" type='text'placeholder='Enter Name..' name="name"></input><br></br>
          <label>Email</label><br></br>
          <input onChange={value} autoComplete="new-password" type='email' placeholder='Enter Email..' name="email"></input><br></br>
          <label>Password</label><br></br>
          <input onChange={value} autoComplete="new-password"  type='password' placeholder='Enter Password..' name=" password"></input><br></br>
          <label>Confirm Password</label><br></br>
          <input onChange={value}  type='password' placeholder='Enter Confirm Pass..' name="confirmpass"></input><br></br>
          <input type='submit'></input>
          



      </form>
    
  </div>
)
}

export default Register;


