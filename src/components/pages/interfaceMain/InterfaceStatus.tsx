import styled from "styled-components";
import TaskCard from "../../reusable-ui/TaskCard";

export default function InterfaceStatus() {
  return (
    <InterfaceStyled className="interface">
      <div className="list">
        <h2>To Do</h2>
        <TaskCard />
      </div>
      <div className="list">
        <h2>Doing</h2>
        <TaskCard />
      </div>
      <div className="list">
        <h2>Done</h2>
        <TaskCard />
      </div>
    </InterfaceStyled>
  );
}

const InterfaceStyled = styled.div`
  background-color: #F5F5F7;
  flex-grow: 1;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  .list {
    width: 370px;
    height: 550px;
    border-radius: 5px;
    background-color: #3755167d;
    margin-left: 30px;
    margin-top: 20px;
    overflow-y: scroll;
    scrollbar-width: none;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

    h2{
        display: flex;
        justify-content: center;
    }
  }
`;
