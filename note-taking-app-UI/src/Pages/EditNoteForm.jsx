import {useEffect, useRef, useState} from "react";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";
import axios from "axios";

export const EditNoteForm=()=>{
    const url="http://localhost:5280"
   // const [searchParams, setSearchParams] = useSearchParams()
    
  //  const [notes, setNotes] = useState([])
    
  /*  useEffect(() => {
        axios.get(`${url}/api/NoteApi/`).then(
            response=>{
                console.log(response.data)
                setNotes(response.data)
            }).catch(e=>console.error(e))
    }, []);*/

    const location=useLocation()
    const queryParams=new URLSearchParams(location.search)
    const  oldnoteid=queryParams.get(`note`)
    //const oldnoteid=searchParams.get("id")
    console.log(oldnoteid,"note")
   // console.log(notes)
    //const oldnote=notes.filter((note)=>note.id===oldnoteid)
    
   // console.log(oldnote)
    
    
    const [newTitle, setNewTitle] = useState(oldnoteid.Title)
    const [newContents, setNewContents] = useState(oldnoteid.Content)
    
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
    
    axios.put(`${url}/api/NoteApi/${event.id}`,newNote,{headers})
        .then(response=>{console.log(response.data)})
        .catch(error=>console.error(error))


    navigate("/Notes")
}
return (
    <>
        <form onSubmit={(event)=>{handleSubmit(event)}} >
            <input hidden value={oldnoteid.id}/>
            <label>Title:</label>
            <input  value={`${oldnoteid.Title}`}  type={"text"}  placeholder={"Enter Title"} onChange={(event)=>{
                setNewTitle(event.target.value)
            }}/>
            <br/>
            <label>Content:</label>
            <textarea  value={`${oldnoteid.Content}`}  placeholder={"Enter Content"} onChange={(event)=>{
                setNewContents(event.target.value)}}/>
            <br/>

            <button className={`submit`} type={"submit"}>Submit</button>
        </form>
    </>
)}