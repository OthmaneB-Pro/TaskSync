import { useState } from "react";
import { TaskType } from "../components/reusable-type/TaskCard";
import { tasks } from "../fakeData/fakeTask";

export const useTask = () => {
  const [tache, setTache] = useState<TaskType[]>(tasks);
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

  const onDelete = (taskId: number) => {
    setTache(tache.filter((task) => taskId !== task.id));
  };

  const onMove = (taskId: number, taskStatus: string) => {
    const updatedTasks = tache.map((task) =>
      task.id === taskId ? { ...task, status: taskStatus } : task
    );
    setTache(updatedTasks);
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
