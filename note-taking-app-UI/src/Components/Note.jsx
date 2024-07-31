
import "../Styles/Note.css"

export const Note = ({note,Remove}) => {



    return (
        <>
        <div className=" note">
            <div className="date"> Date:{note.date}</div>
            <div className="title">Title:{note.title}</div>
            <div className="content">{note.content}</div>
            <div >
                <button className={`remove`} onClick={()=>{
                    Remove(note.id);
                }}>Remove</button>
            </div>
        </div>

        </>
    )
}