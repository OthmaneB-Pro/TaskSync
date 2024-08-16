import styled from "styled-components";
import ButtonPrimary from "../../../reusable-ui/ButtonPrimary";

export default function TaskDetails({ task }: any) {
  return (
    <TaskDetailsStyled className="task-details">
      <p>Description complète : {task.description}</p>
      <div className="actions">
        <ButtonPrimary label="Modifier" className="button" onClick={() => {}} />
        <ButtonPrimary
          label="Supprimer"
          className="button"
          onClick={() => {}}
        />
        <ButtonPrimary label="Déplacer" className="button" onClick={() => {}} />
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
`;
