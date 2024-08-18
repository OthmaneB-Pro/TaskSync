import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"
import { empty_tasks } from "../fakeData/fakeTask"

export const getUser = async (idUser : string) => {
    const docRef = doc(db, "users", idUser)
    const docSnapShot = await getDoc(docRef)

    if(docSnapShot.exists()){
        const result = docSnapShot.data()
    }
}

export const createUser = async (idUser : string, password : string, date : any) => {
    const docRef = doc(db, "users", idUser)
    const newDoc = {
        username: idUser,
        password : password,
        date : date,
        task : empty_tasks,
    }
   
    setDoc(docRef, newDoc)
}
