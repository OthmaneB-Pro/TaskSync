import { useParams } from "react-router";
import { TaskType } from "../../../../../reusable-type/TaskCard";
import ButtonPrimary from "../../../../../reusable-ui/ButtonPrimary";

export type TaskDetailsType = {
    task: TaskType;
    onDelete: (id: number, username : string) => void;
    onMove: (id: number, status: string, username: string) => void;
    onUpdated: (id: number) => void;
  }

export default function TaskActions({ task, onDelete, onMove, onUpdated }: TaskDetailsType) {
  const {username} = useParams()
  return (
    <div className="actions">
      <ButtonPrimary label="Modifier" className="button" onClick={() => onUpdated(task.id)} />
      <ButtonPrimary label="Supprimer" className="button" onClick={() => onDelete(task.id, username as string)} />

      {task.status !== "To Do" && task.status !== "Done" && (
        <ButtonPrimary
          label="To Do"
          className="button-move"
          onClick={() => onMove(task.id, "To Do", username as string)}
        />
      )}
      {task.status !== "Doing" && (
        <ButtonPrimary
          label="Doing"
          className="button-move"
          onClick={() => onMove(task.id, "Doing", username as string)}
        />
      )}
      {task.status !== "Done" && task.status !== "To Do" && (
        <ButtonPrimary
          label="Done"
          className="button-move"
          onClick={() => onMove(task.id, "Done", username as string)}
        />
      )}
    </div>
  );
}