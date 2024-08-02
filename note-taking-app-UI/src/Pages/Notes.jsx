import {AddNote} from "../Components/AddNote.jsx";
import {Link, useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {Note} from "../Components/Note.jsx";
import "../Styles/Notes.css"
import axios from 'axios'
import error from "eslint-plugin-react/lib/util/error.js";
import {NotesContext} from "../NotesProvider.jsx";
import {render} from "react-dom";
export const Notes = () => {
    const url="https://localhost:7068"
    const [notes, setNotes] = useState([])
   
    const fetch=()=>{ axios.get(`${url}/api/NoteApi/`).then(
        response=>{
            console.log(response.data)
            setNotes(response.data)
        }
    ).catch(e=>console.error(e))}
    
    useEffect(  () => {
     fetch()
        
    }, []);
    
   // const {Notes,setNotes} = useContext(NotesContext)
    const navigate= useNavigate()
    const RemoveNote = (id) => {
       
        axios.delete(`${url}/api/NoteApi/${id}`).then(res=>{
            console.log(res.data)
        })
        setNotes(notes.filter((note)=>note.id!==id))
    }
    const EditNote = (id) => {
        
       navigate(`/EditNoteForm`)

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
                    return <Note className={`note`} key={note.id} note={note} Remove={RemoveNote} Edit={EditNote} />
                })
            }</div>
        </div>
    )
}