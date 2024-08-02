import {useRef} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export const EditNoteForm=()=>{

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
        id:event.id
    };
    console.log(newNote)
    const url="https://localhost:7068"
    axios.put(`${url}/api/NoteApi/${id}`,newNote,{headers})
        .then(response=>{console.log(response.data)})
        .catch(error=>console.error(error))


    navigate("/Notes")
}
return (
    <>
        <form onSubmit={(event)=>{handleSubmit(event)}} >
            <label>Title:</label>
            <input ref={TitleRef}  type={"text"}  placeholder={"Enter Title"} />
            <br/>
            <label>Content:</label>
            <textarea ref={ContentRef}   placeholder={"Enter Content"} />
            <br/>

            <button className={`submit`} type={"submit"}>Submit</button>
        </form>
    </>
)}