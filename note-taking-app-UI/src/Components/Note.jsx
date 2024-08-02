
import "../Styles/Note.css"

export const Note = ({note,Remove,Edit}) => {



    return (
        <>
        <div className=" note">
            <div className="date"> Date:{String(note.date).slice(0,25)}</div>
            <div className="title">Title:{note.title}</div>
            <div className="content">{note.content}</div>
            <div>
                <button className={`remove`} onClick={() => {
                    Remove(note.id);
                }}>Remove
                </button>
                <button className={`edit`} onClick={() => {
                    Edit(note);
                }}>Edit
                </button>
            </div>
        </div>

        </>
    )
}