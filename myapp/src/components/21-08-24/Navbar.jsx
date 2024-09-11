import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css"
import Home from "../Home";
import Login from "../login";
import Counter from "../Counter";
import Useeffect from "./effect";
import Useeffect1 from "./effect1";
import Useeffect2 from "./effect2";
import Useeffect3 from "./effect3";
import UseParams from "../24-08/Useparams";
import PropDrilling from "../24-08/Prop";
import Register from "../register";
import Usereducer from "../usereducer";

function Navbar(){

    const router=useNavigate()

    function Home(){
        router ("/")
    }
    function Register(){
        router ("/register")
    }



    function Login(){
        router ("/login")
    }

    function Counter(){
        router ("/Counter")
    }
    function Useeffect(){
        router("/effect")
    }
    function Useeffect1(){
        router("/effect1")
    }
    function Useeffect2(){
        router("/effect2")
    }
    function Useeffect3(){
        router("/effect3")
    }
    function UseParams(){
        router("/product/:id")
    }
    function PropDrilling(){
        router("/Prop")
    }
    function Dynamicclass(){
        router("/dynamicclass")
    }
    function Usereducer(){
        router("/userReducer")
    }
    
    







    return <>
    <div className="div">
    <h1 onClick={Home}>Home</h1>
    <h1 onClick={Login}>Login</h1>
    <h1 onClick={Counter}>Counter</h1>
    <h1 onClick={Useeffect}>Useeffect</h1>
    <h1 onClick={Useeffect1}>Useeffect1</h1>
    <h1 onClick={Useeffect2}>Useeffect2</h1>
    <h1 onClick={Useeffect3}>Useeffect3</h1>
    <h1 onClick={UseParams}>UseParam</h1>
    <h1 onClick={PropDrilling}>PropDrilling</h1>
    <h1 onClick={Register}>Register</h1>
    <h1 onClick={Dynamicclass}>Dynamicclass</h1>
    <h1 onClick={Usereducer}>Usereducer</h1>
    </div>
    </>

    
}
export default Navbar;