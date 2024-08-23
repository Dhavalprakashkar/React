import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom"
import Home from './components/Home';
import Login from './components/login';
import Notfound from './components/notfound';

function App() {
  return (
    <>
    <Routes>
    <Route path="*" element={<Notfound/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>

    </>
  );
}

export default App;
