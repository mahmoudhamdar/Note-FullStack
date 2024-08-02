import {createContext, useState} from "react";


export const NotesContext= createContext(null)

    export const NotesProvider = ({children}) => {
        const [fetchorNO, setfetchorNO] = useState(false)



        return (
            <NotesContext.Provider value={{fetchorNO: fetchorNO,
                setfetchorNO: setfetchorNO}}>


                {children}

            </NotesContext.Provider>
        )
    }