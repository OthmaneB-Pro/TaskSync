import { createContext } from "react";
import { TaskType } from "../components/reusable-type/TaskCard";

type UserContextType = {
    tache: TaskType[]; 
    setTache: React.Dispatch<React.SetStateAction<TaskType[]>>
}

export const UserContext  = createContext<UserContextType>( {
    tache : [],
    setTache : () => {},
})