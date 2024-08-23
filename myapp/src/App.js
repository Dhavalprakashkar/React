import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom"
import Home from './components/Home';
import Login from './components/login';
import Notfound from './components/notfound';
import Navbar from './components/21-08-24/Navbar';
import Counter from './components/Counter';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="*" element={<Notfound/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/Counter" element={<Counter/>}/>
    </Routes>

    </>
  );
}

export default App;
