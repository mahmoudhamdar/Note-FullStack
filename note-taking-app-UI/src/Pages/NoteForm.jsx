import {useContext, useRef} from "react";
import {NotesContext} from "../NotesProvider.jsx";
import {useNavigate} from "react-router-dom";
import "../Styles/NoteForm.css"

export const NoteForm = () => {

    //const {setNotes,Notes}=useContext(NotesContext)
    const TitleRef = useRef("");
    const ContentRef = useRef("");
    const navigate= useNavigate()

    return (
        <>
            <form>
            <label>Title:</label>
            <input ref={TitleRef}  type={"text"} placeholder={"Enter Title"} />
            <br/>
            <label>Content:</label>
            <textarea ref={ContentRef}   placeholder={"Enter Content"} />
            <br/>
            </form>
            <button className={`submit`}  onClick={()=>{

                const newNote = {
                    Title:String (TitleRef.current.value),
                    Content: String( ContentRef.current.value),
                    Date: new Date().toString().slice(0,25),
                    id: Math.floor(Math.random() * 1000)
                };
                localStorage.setItem(`${newNote.id}`, JSON.stringify(newNote));
               // setNotes( prevNotes=> [...prevNotes, newNote]);
                navigate("/Notes")
            }}>Submit</button>

        </>
    )
}