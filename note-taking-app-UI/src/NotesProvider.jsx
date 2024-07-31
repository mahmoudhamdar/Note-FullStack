import {createContext, useState} from "react";


export const NotesContext= createContext(null)

    export const NotesProvider = ({children}) => {
        const [Notes, setNotes] = useState([])



        return (
            <NotesContext.Provider value={{Notes: Notes,
               setNotes: setNotes}}>


                {children}

            </NotesContext.Provider>
        )
    }