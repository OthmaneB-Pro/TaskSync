import styled from "styled-components";
import TaskList from "./taskCard/function/TaskList";

export default function InterfaceStatus() {
  return (
    <InterfaceStyled className="interface">
      <TaskList title="To Do" status="To Do" />
      <TaskList title="Doing" status="Doing" />
      <TaskList title="Done" status="Done" />
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
