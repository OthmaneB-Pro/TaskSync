import { useState } from "react";
import { TaskType } from "../components/reusable-type/TaskCard";
import { empty_tasks } from "../fakeData/fakeTask";
import { syncTasks } from "../api/task";
import { useParams } from "react-router";

export const useTask = () => {
  const [tache, setTache] = useState<TaskType[]>(empty_tasks);
  const [formulaire, setFormulaire] = useState(false);
  const [formUpdated, setFormUpdated] = useState(false);
  const [newTask, setNewTask] = useState<TaskType>({
    id: Date.now(),
    title: "",
    description: "",
    dueDate: "",
    tags: "",
    status: "To Do",
  });

  const onDelete = (taskId: number, username: string) => {
    const updatedTasks = tache.filter((task) => taskId !== task.id);
    setTache(updatedTasks);
    syncTasks(username, updatedTasks);
  };

  const onMove = (taskId: number, taskStatus: string, username: string) => {
    const updatedTasks = tache.map((task) =>
      task.id === taskId ? { ...task, status: taskStatus } : task
    );
    setTache(updatedTasks);
    syncTasks(username, updatedTasks); 
  };

  const onUpdated = (taskId: number) => {
    setFormUpdated(true);
    const CardSelectToUpdated = tache.find((task) => task.id === taskId);
    if (CardSelectToUpdated) {
      setNewTask({
        id: CardSelectToUpdated.id,
        title: CardSelectToUpdated.title,
        description: CardSelectToUpdated.description,
        dueDate: CardSelectToUpdated.dueDate,
        tags: CardSelectToUpdated.tags,
        status: CardSelectToUpdated.status,
      });
    }
  };
  return {
    tache,
    setTache,
    formulaire,
    setFormulaire,
    formUpdated,
    setFormUpdated,
    newTask,
    setNewTask,
    onDelete,
    onMove,
    onUpdated,
  };
};
