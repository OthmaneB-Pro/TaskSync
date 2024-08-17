import { useContext } from "react";
import { UserContext } from "../../../../../../context/UserContext";
import TaskCard from "../TaskCard";

type TaskListType = {
  title: string;
  status: string;
};

export default function TaskList({ title, status }: TaskListType) {
  const { tache } = useContext(UserContext);

  return (
    <div className="list">
      <h2>{title}</h2>
      {tache
        .filter((task) => task.status === status)
        .map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
    </div>
  );
}
