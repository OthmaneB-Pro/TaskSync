import { useState } from "react";
import CardPrimary from "../../../../reusable-ui/CardPrimary";
import { TaskType } from "../../../../reusable-type/TaskCard";
import { useContext } from "react";
import { UserContext } from "../../../../../context/UserContext";

interface TaskCardProps {
  task: TaskType;
}

export default function TaskCard({ task }: TaskCardProps) {
  const { tache, setTache, setFormUpdated, setNewTask } =
    useContext(UserContext);
  const [expandedTaskId, setExpandedTaskId] = useState<number | null>(null);

  const handleDelete = (taskId: number) => {
    setTache(tache.filter((task) => taskId !== task.id));
  };
  const handleMove = (taskId: number, taskStatus: string) => {
    const updatedTasks = tache.map((task) =>
      task.id === taskId ? { ...task, status: taskStatus } : task
    );
    setTache(updatedTasks);
  };
  const handleUpdated = (taskId: number) => {
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

  const toggleExpand = (taskId: number) => {
    setExpandedTaskId(expandedTaskId === taskId ? null : taskId);
  };

  return (
    <CardPrimary
      task={task}
      isExpanded={expandedTaskId === task.id}
      onExpand={toggleExpand}
      onDelete={handleDelete}
      onMove={handleMove}
      onUpdated={handleUpdated}
    />
  );
}
