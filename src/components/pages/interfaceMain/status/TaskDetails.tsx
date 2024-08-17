import styled from "styled-components";
import ButtonPrimary from "../../../reusable-ui/ButtonPrimary";

export default function TaskDetails({ task, onDelete, onMove }: any) {
  return (
    <TaskDetailsStyled className="task-details">
      <p>Description complète : {task.description}</p>
      <div className="actions">
        <ButtonPrimary label="Modifier" className="button" onClick={() => {}} />
        <ButtonPrimary
          label="Supprimer"
          className="button"
          onClick={() => onDelete(task.id)}
        />
        {task.status !== "To Do" && task.status !== "Done" && (
          <>
          <ButtonPrimary
            label="To Do"
            className="button-move"
            onClick={() => onMove(task.id, "To Do")}
          />
          <ButtonPrimary
            label="Done"
            className="button-move"
            onClick={() => onMove(task.id, "Done")}
          />
          </>
        )}
        {task.status !== "Doing" && (
          <ButtonPrimary
            label="Doing"
            className="button-move"
            onClick={() => onMove(task.id, "Doing")}
          />
        )}
       
      </div>
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
  .button-move{
    margin-top: 0;
    width: 65px;
    height: 30px;
    background-color: #e7d04a;
  }
`;
