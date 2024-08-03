import {useContext, useRef} from "react";
import {NotesContext} from "../NotesProvider.jsx";
import {useNavigate} from "react-router-dom";
import "../Styles/NoteForm.css"
import axios from "axios";

export const NoteForm = () => {

    
    const TitleRef = useRef("");
    const ContentRef = useRef("");
    const navigate= useNavigate()
    const headers= {
        'Content-Type':'application/json'
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        const newNote = {
            Title:String (TitleRef.current.value),
            Content: String( ContentRef.current.value),
            Date: new Date(),
            id: Math.floor(Math.random() * 1000)
        };
        console.log(newNote)
        const url="http://localhost:5280"
       axios.post(`${url}/api/NoteApi`,newNote,{headers})
            .then(response=>{console.log(response.data)})
            .catch(error=>console.error(error))
       
       
        navigate("/Notes")
    }
    return (
        <>
            <form onSubmit={(event)=>{handleSubmit(event)}} >
            <label>Title:</label>
            <input ref={TitleRef}  type={"text"} placeholder={"Enter Title"} />
            <br/>
            <label>Content:</label>
            <textarea ref={ContentRef}   placeholder={"Enter Content"} />
            <br/>
            
            <button className={`submit`} type={"submit"}>Submit</button>
            </form>
        </>
    )
}