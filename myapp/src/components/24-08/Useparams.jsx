import { useParams } from "react-router-dom"

function UseParams(){
    const {id}= useParams();

    return(
        <div>
            <h1>UseParams - {id}</h1>
        </div>
    )
}   

export default UseParams;