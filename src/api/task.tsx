import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { TaskType } from "../components/reusable-type/TaskCard";

export const syncTasks = async (idUser: string, tasksUpdated: TaskType[]) => {
  const docRef = doc(db, "users", idUser);
  const newQuelque = {
    username : idUser,
    task : tasksUpdated,
  }
  setDoc(docRef, newQuelque)
};


export const getTask = async (idUser : string) => {
    const docRef = doc(db, "users", idUser)
    const docSnapShot = await getDoc(docRef)

    if(docSnapShot.exists()){
        const {task} = docSnapShot.data()
        return task
    }
}
