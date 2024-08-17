import styled from "styled-components";
import TaskCard from "./taskCard/TaskCard";
import { useContext } from "react";
import { UserContext } from "../../../../context/UserContext";

export default function InterfaceStatus() {
  const { tache } = useContext(UserContext);
  return (
    <InterfaceStyled className="interface">
      <div className="list">
        <h2>To Do</h2>
        {tache
          .filter((task) => task.status === "To Do")
          .map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
      </div>
      <div className="list">
        <h2>Doing</h2>
        {tache
          .filter((task) => task.status === "Doing")
          .map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
      </div>
      <div className="list">
        <h2>Done</h2>
        {tache
          .filter((task) => task.status === "Done")
          .map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
      </div>
    </InterfaceStyled>
  );
}

const InterfaceStyled = styled.div`
  background-color: #f5f5f7;
  flex-grow: 1;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  .list {
    width: 370px;
    height: 550px;
    border-radius: 5px;
    background-color: #e0e0de79;
    margin-left: 30px;
    margin-top: 30px;
    overflow-y: scroll;
    scrollbar-width: none;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

    h2 {
      display: flex;
      justify-content: center;
    }
  }
`;
