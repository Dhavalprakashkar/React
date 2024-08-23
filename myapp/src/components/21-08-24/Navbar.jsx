import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css"
import Home from "../Home";
import Login from "../login";
import Counter from "../Counter";
function Navbar(){

    const router=useNavigate()

    function Home(){
        router ("/")
    }

    function Login(){
        router ("/login")
    }

    function Counter(){
        router ("/Counter")
    }






    return <>
    <div className="div">
    <h1 onClick={Home}>Home</h1>
    <h1 onClick={Login}>Login</h1>
    <h1 onClick={Counter}>Counter</h1>
    </div>
    </>

    
}
export default Navbar;