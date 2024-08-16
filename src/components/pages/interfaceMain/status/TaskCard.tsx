import { useState } from "react";
import { tasks } from "../../../../fakeData/fakeTask";
import CardPrimary from "../../../reusable-ui/CardPrimary";
import { TaskType } from "../../../reusable-type/TaskCard";

export default function TaskList() {
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
