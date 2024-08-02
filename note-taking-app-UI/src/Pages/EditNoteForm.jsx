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
    const  oldnoteid=queryParams.get("id")
    const [oldnote, setOldnote] = useState({})
    useEffect(()=>{
        axios.get(`${url}/api/NoteApi/${oldnoteid}`).then(response=>{
            console.log(response.data)
            setOldnote(response.data)
        })
    },[])
    //const oldnoteid=searchParams.get("id")
    console.log(oldnote,"note")
   // console.log(notes)
    //const oldnote=notes.filter((note)=>note.id===oldnoteid)
   // console.log(oldnote)
    
    
    const [newTitle, setNewTitle] = useState(oldnote.title)
    const [newContents, setNewContents] = useState(oldnote.content)
    
    const navigate= useNavigate()
    const headers= {
        'Content-Type':'application/json'
    } 
const handleSubmit=(event)=>{
    event.preventDefault();
    const newNote = {
        title:event.newTitle,
        content:event.newContents,
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
            <input hidden value={oldnote.id}/>
            <label>Title:</label>
            <input  value={newTitle}  type={"text"}  placeholder={"Enter Title"} onChange={(event)=>{
                setNewTitle((title)=>title+String (event.target.value))
            }}/>
            <br/>
            <label>Content:</label>
            <textarea  value={newContents}  placeholder={"Enter Content"} onChange={(event)=>{
                setNewContents((cont)=>cont+String (event.target.value))}}/>
            <br/>

            <button className={`submit`} type={"submit"}>Submit</button>
        </form>
    </>
)}