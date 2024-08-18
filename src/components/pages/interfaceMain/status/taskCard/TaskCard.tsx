import { useState } from "react";
import CardPrimary from "../../../../reusable-ui/CardPrimary";
import { TaskType } from "../../../../reusable-type/TaskCard";
import { useContext } from "react";
import { UserContext } from "../../../../../context/UserContext";
import { useParams } from "react-router";

interface TaskCardProps {
  task: TaskType;
}

export default function TaskCard({ task }: TaskCardProps) {
  const { onDelete, onMove, onUpdated } = useContext(UserContext);
  const [expandedTaskId, setExpandedTaskId] = useState<number | null>(null);
  const {username} = useParams()
  const toggleExpand = (taskId: number) => {
    setExpandedTaskId(expandedTaskId === taskId ? null : taskId);
  };

  return (
    <CardPrimary
      task={task}
      isExpanded={expandedTaskId === task.id}
      onExpand={toggleExpand}
      onDelete={() => onDelete(task.id, username as string)}
      onMove={(id : number, status: string, username: string) => onMove(task.id, status, username)}
      onUpdated={() => onUpdated(task.id)}
    />
  );
}
