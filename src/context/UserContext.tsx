import { createContext } from "react";
import { TaskType } from "../components/reusable-type/TaskCard";

type UserContextType = {
  tache: TaskType[];
  setTache: React.Dispatch<React.SetStateAction<TaskType[]>>;
  formulaire: boolean;
  setFormulaire: React.Dispatch<React.SetStateAction<boolean>>;
  formUpdated: boolean;
  setFormUpdated: React.Dispatch<React.SetStateAction<boolean>>;
  newTask: TaskType;
  setNewTask: React.Dispatch<React.SetStateAction<TaskType>>;
  onDelete : (taskId: number) => void,
  onMove : (taskId: number, taskStatus: string) => void,
  onUpdated : (taskId: number) => void,
};

export const UserContext = createContext<UserContextType>({
  tache: [],
  setTache: () => {},
  formulaire: false,
  setFormulaire: () => {},
  formUpdated: false,
  setFormUpdated: () => {},
  newTask: {
    id: Date.now(),
    title: "",
    description: "",
    dueDate: "",
    tags: "",
    status: "To Do",
  },
  setNewTask: () => {},
  onDelete: () => {},
  onMove: () => {},
  onUpdated: () => {},
});
