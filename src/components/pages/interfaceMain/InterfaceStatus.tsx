import styled from "styled-components";
import TaskCard from "../../reusable-ui/TaskCard";

export default function InterfaceStatus() {
  return (
    <InterfaceStyled className="interface">
      <div className="list">
        <p>To Do</p>
        <TaskCard />
      </div>
      <div className="list">
        <p>Doing</p>
      </div>
      <div className="list">
        <p>Done</p>
      </div>
    </InterfaceStyled>
  );
}

const InterfaceStyled = styled.div`
  background-color: #00d5ff;
  flex-grow: 1;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  .list {
    width: 370px;
    height: 550px;
    background-color: #999797;
    margin-left: 15px;
    margin-top: 20px;
    overflow-y: scroll;
    scrollbar-width: none;
  }
`;
