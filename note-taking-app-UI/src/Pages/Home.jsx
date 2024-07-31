import {Header} from "../Components/Header.jsx";
import {AddNote} from "../Components/AddNote.jsx";
import {Link, useNavigate} from "react-router-dom";
import "../Styles/Home.css"
export const Home = () => {
   const navigate= useNavigate()
    return (
        <div className={"container"}>
            <div className={`head`}>
                <Header />
            </div>
            <br/>
            <div className={"link"}>
                <AddNote />
            </div>
            <div className={`link`} onClick={()=>{
                navigate("/Notes")
            }}>
            <Link to={"Notes"}> Notes</Link>
            </div>
        </div>
    )
}