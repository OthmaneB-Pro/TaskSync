import styled from "styled-components";
import TaskActions from "./function/TaskActions";
import { TaskDetailsType } from "../../../../reusable-type/TaskCard";

export default function TaskDetails({
  task,
  onDelete,
  onMove,
  onUpdated,
}: TaskDetailsType) {
  return (
    <TaskDetailsStyled className="task-details">
      <p>{task.description}</p>
      <TaskActions
        task={task}
        onDelete={onDelete}
        onMove={onMove}
        onUpdated={onUpdated}
      />
    </TaskDetailsStyled>
  );
}

const TaskDetailsStyled = styled.div`
  button {
    margin-right: 5px;
    padding: 5px 10px;
    border: none;
  }
  .button {
    margin-top: 0;
    width: 93px;
    height: 30px;
  }
  .button-move {
    margin-top: 0;
    width: 65px;
    height: 30px;
    background-color: #e7d04a;
  }
`;
