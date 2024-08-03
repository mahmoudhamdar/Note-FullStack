import {AddNote} from "../Components/AddNote.jsx";
import {Link, useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {Note} from "../Components/Note.jsx";
import "../Styles/Notes.css"
import axios from 'axios'

export const Notes = () => {
    const url="http://localhost:5280"
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
        
       navigate(`/EditNoteForm?id=${id}`)

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