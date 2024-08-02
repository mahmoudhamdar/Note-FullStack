import {BrowserRouter,Routes,Route} from "react-router-dom"
import {NoteForm} from "./Pages/NoteForm.jsx";
import {Notes} from "./Pages/Notes.jsx";
import {Home} from "./Pages/Home.jsx";
import {EditNoteForm} from "./Pages/EditNoteForm.jsx";


function App() {

   
  return (
    <>
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/NoteForm" element={<NoteForm  />} />
                <Route path="/Notes" element={<Notes />} />
               <Route path={"/EditNoteForm"} element={<EditNoteForm />} />
            </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
