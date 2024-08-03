import {useEffect, useRef, useState} from "react";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";
import axios from "axios";

export const EditNoteForm=()=>{
    const url="https://localhost:7068"
  

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

    const [newTitle, setNewTitle] = useState("")
    const [newContents, setNewContents] = useState("")

    useEffect(() => {
        if (oldnote.title && oldnote.content) {
            setNewTitle(oldnote.title);
            setNewContents(oldnote.content);
        }
    }, [oldnote]);
    
    const navigate= useNavigate()
    const headers= {
        'Content-Type':'application/json'
    } 
const handleSubmit=(event)=>{
    event.preventDefault();
    const newNote = {
        title:newTitle,
        content:newContents,
        Date: new Date(),
        id:oldnoteid
    };
    console.log(newNote)
    
    axios.put(`${url}/api/NoteApi/${oldnoteid}`,newNote,{headers})
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
                setNewTitle((title)=>String (event.target.value))
            }}/>
            <br/>
            <label>Content:</label>
            <textarea  value={newContents}  placeholder={"Enter Content"} onChange={(event)=>{
                setNewContents((cont)=>String (event.target.value))}}/>
            <br/>

            <button className={`submit`} type={"submit"}>Submit</button>
        </form>
    </>
)}