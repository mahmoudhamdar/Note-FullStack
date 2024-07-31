import {Link, useNavigate} from "react-router-dom";
import "../Styles/AddNote.css"
export const AddNote = () => {
   const navigate= useNavigate()
    return (
        < div onClick={()=>{
            navigate( "/NoteForm" );
        }}>

            <Link to={"/NoteForm"} >Add Note</Link>

        </div>
    )
}