import './App.css';
import {Route, Routes} from "react-router-dom"
import Home from './components/Home';
import Login from './components/login';
import Register  from './components/register';
import Navbar from './components/21-08-24/Navbar';
import Counter from './components/Counter';
import Useeffect from './components/21-08-24/effect';
import Useeffect1 from './components/21-08-24/effect1';
import Useeffect2 from './components/21-08-24/effect2';
import Useeffect3 from './components/21-08-24/effect3';
import UseParams from './components/24-08/Useparams';
import PropDrilling from './components/24-08/Prop';
import { useState } from 'react';
import Mapping  from './components/24-08/Mapping';  
import Mapping2 from './components/24-08/Mapping2';

import  Todo  from './components/29-08/todo';
import  Dynamicclass from './components/29-08/dynamicclass';
import Usereducer from './components/usereducer';
import Usecontext from './components/04-09-24/usecontext';
import Usememo from './components/05-09-24/usememo';
import Memo from './components/mem';
import Callback from './components/12-09-24/Callback';
import Task from './components/ReactTest/Task';
import UseRef from './components/15-09-24/UseRef';
import Weather from './components/Weather';




function App() {
  const [students,setStudents]=useState(["ronaldo","ishowspeed",]);
  

  const[counter, setCounter]=useState(1);
  function Increment(){
    setCounter(counter +1)
  }
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/register" element={<Register/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/Counter" element={<Counter/>}/>
      <Route path='/effect' element={<Useeffect/>}/>
      <Route path="/effect1" element={<Useeffect1/>}/>
      <Route path="/effect2" element={<Useeffect2/>}/>
      <Route path='/effect3' element={<Useeffect3/>}/>
      <Route path='/product/:id' element={<UseParams/>}/>
      <Route 
        path='/Prop' 
        element={<PropDrilling 
      students={["demon","slayer"]}
      counter={counter}
      Increase={Increment}

    />
    }
    />
      <Route path='/Mapping' element={<Mapping students={students}/>}/>
      <Route path='/Mapping2' element={<Mapping2 />}/>  
      
      <Route path='/todo' element={<Todo/>}/>
      <Route path='/dynamicclass' element={<Dynamicclass/>}/>
      <Route path='/userReducer' element={<Usereducer/>}/>
      <Route path='/usecontext' element={<Usecontext/>}/>
      <Route path='/usememo' element={<Usememo/>}/>
      <Route path='/mem' element={<Memo/>}/>
      <Route path='/callback' element={<Callback/>}/>
      <Route path='/task' element={<Task/>}/>
      <Route path="/useref" element={<UseRef/>} />
      <Route path="/weather" element={<Weather/>}/>

     

   

    </Routes>

    </>
  );
}

export default App;
