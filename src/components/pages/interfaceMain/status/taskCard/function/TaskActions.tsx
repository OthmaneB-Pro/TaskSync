import { TaskType } from "../../../../../reusable-type/TaskCard";
import ButtonPrimary from "../../../../../reusable-ui/ButtonPrimary";

export type TaskDetailsType = {
    task: TaskType;
    onDelete: (id: number) => void;
    onMove: (id: number, status: string) => void;
    onUpdated: (id: number) => void;
  }

export default function TaskActions({ task, onDelete, onMove, onUpdated }: TaskDetailsType) {
  return (
    <div className="actions">
      <ButtonPrimary label="Modifier" className="button" onClick={() => onUpdated(task.id)} />
      <ButtonPrimary label="Supprimer" className="button" onClick={() => onDelete(task.id)} />

      {task.status !== "To Do" && (
        <ButtonPrimary
          label="To Do"
          className="button-move"
          onClick={() => onMove(task.id, "To Do")}
        />
      )}
      {task.status !== "Doing" && (
        <ButtonPrimary
          label="Doing"
          className="button-move"
          onClick={() => onMove(task.id, "Doing")}
        />
      )}
      {task.status !== "Done" && (
        <ButtonPrimary
          label="Done"
          className="button-move"
          onClick={() => onMove(task.id, "Done")}
        />
      )}
    </div>
  );
}