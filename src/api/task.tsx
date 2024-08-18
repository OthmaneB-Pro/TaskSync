import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { TaskType } from "../components/reusable-type/TaskCard";

export const syncTasks = async (idUser: string, newTask: TaskType) => {
  const docRef = doc(db, "users", idUser);
  const docSnapShot = await getDoc(docRef);
  let tasksArray: TaskType[] = [];

  if (docSnapShot.exists()) {
    const data = docSnapShot.data();
    tasksArray = Array.isArray(data?.task) ? data.task : [];
  }
  tasksArray = [...tasksArray, newTask];

  await updateDoc(docRef, {
    task: tasksArray,
  });
};

export const getTask = async (idUser: string): Promise<TaskType[]> => {
  try {
    const docRef = doc(db, "users", idUser);
    const docSnapShot = await getDoc(docRef);

    if (docSnapShot.exists()) {
      const data = docSnapShot.data();
      const task = data?.task;

      if (Array.isArray(task)) {
        return task as TaskType[];
      } else if (task) {
        return [task as TaskType];
      } else {
        return [];
      }
    } else {
      return [];
    }
  } catch (error) {
    console.error("Erreur lors de la récupération des tâches :", error);
    return [];
  }
};
