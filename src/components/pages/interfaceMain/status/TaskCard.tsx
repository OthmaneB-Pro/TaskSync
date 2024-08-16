import { useState } from "react";
import { tasks } from "../../../../fakeData/fakeTask";
import CardPrimary, { TaskType } from "../../../reusable-ui/CardPrimary";

export default function TaskList() {
  // Utiliser les types pour définir les états
  const [expandedTaskId, setExpandedTaskId] = useState<number | null>(null);

  const toggleExpand = (taskId: number) => {
    setExpandedTaskId(expandedTaskId === taskId ? null : taskId);
  };

  return (
    <div>
      {tasks.map((task: TaskType) => (
        <CardPrimary
          key={task.id}
          task={task}
          isExpanded={expandedTaskId === task.id}
          onExpand={toggleExpand}
        />
      ))}
    </div>
  );
}
