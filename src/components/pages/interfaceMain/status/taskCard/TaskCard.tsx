import { useState } from "react";
import CardPrimary from "../../../../reusable-ui/CardPrimary";
import { TaskType } from "../../../../reusable-type/TaskCard";
import { useContext } from "react";
import { UserContext } from "../../../../../context/UserContext";

interface TaskCardProps {
  task: TaskType;
}

export default function TaskCard({ task }: TaskCardProps) {
  const { onDelete, onMove, onUpdated } = useContext(UserContext);
  const [expandedTaskId, setExpandedTaskId] = useState<number | null>(null);

  const toggleExpand = (taskId: number) => {
    setExpandedTaskId(expandedTaskId === taskId ? null : taskId);
  };

  return (
    <CardPrimary
      task={task}
      isExpanded={expandedTaskId === task.id}
      onExpand={toggleExpand}
      onDelete={() => onDelete(task.id)}
      onMove={(id : number, status: string) => onMove(task.id, status)}
      onUpdated={() => onUpdated(task.id)}
    />
  );
}
