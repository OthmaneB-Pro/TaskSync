import { useState } from "react";
import { tasks } from "../../../../fakeData/fakeTask";
import CardPrimary from "../../../reusable-ui/CardPrimary";
import { TaskType } from "../../../reusable-type/TaskCard";

export default function TaskList() {
  const [tache, setTache] = useState<TaskType[]>(tasks)
  const [expandedTaskId, setExpandedTaskId] = useState<number | null>(null);

  const handleDelete = (taskId : number) => {
     setTache(tache.filter((idProduct) => taskId !== idProduct.id))
  }


  const toggleExpand = (taskId: number) => {
    setExpandedTaskId(expandedTaskId === taskId ? null : taskId);
  };
  
  return (
    <div>
      {tache.map((task: TaskType) => (
        <CardPrimary
          key={task.id}
          task={task}
          isExpanded={expandedTaskId === task.id}
          onExpand={toggleExpand}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}
