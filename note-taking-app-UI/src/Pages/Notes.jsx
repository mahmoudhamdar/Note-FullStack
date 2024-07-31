import {AddNote} from "../Components/AddNote.jsx";
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {Note} from "../Components/Note.jsx";
import "../Styles/Notes.css"
import axios from 'axios'
import error from "eslint-plugin-react/lib/util/error.js";
export const Notes = () => {
    const url="http://localhost:5280"
    const [notes, setNotes] = useState([])
   
    
    useEffect( () => {
      fetchNotes();
      /*axios.get(`${url}/GetAllNotes`).then(
         response=>{
            console.log(response.data)
         }
     ).catch(e=>console.error(e))*/
        
    }, []);
    const fetchNotes=async ()=>{ 
       await fetch(`https://localhost:7068/api/NoteApi/`).then(res=>res.json()).then(data=>{console.log(data)
       setNotes(data)}
       )
    }
   // const {Notes,setNotes} = useContext(NotesContext)
    const navigate= useNavigate()
    const RemoveNote = (id) => {
        //setNotes(Notes.filter((note) => note.id !== id))
        localStorage.removeItem(`${id}`);
       // setLocalNotes(localNotes.filter(note => note.id !== id))
    }
    return (
        <div className="container">
            <div className={"link"} onClick={()=>{
                navigate( "/" );
            }}>

        <Link to={"/"} >Home</Link>
            </div>
            <div className={`link`}> <AddNote/></div>
            <div className={`note-container`}>
            {
                notes.map(note => {
                   if (note!=null)
                    return <Note className={`note`} key={note.id} note={note} Remove={RemoveNote}/>
                })
            }</div>
        </div>
    )
}