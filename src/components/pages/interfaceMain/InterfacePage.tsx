import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import ButtonPrimary from "../../reusable-ui/ButtonPrimary";
import TaskCard from "../../reusable-ui/TaskCard";

export default function InterfacePage() {
  const { username } = useParams();
  const navigate = useNavigate();
  return (
    <InterfacePageStyled>
      <div className="container">
        <div className="navbar">
          InterfacePage {username}
          <ButtonPrimary
            label="Déconnexion"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        <div className="menu">
          <div className="project">Projet</div>
          <div className="interface">
            <div className="list">
              <p>To Do</p>
              <TaskCard/>
            </div>
            <div className="list">
              <p>Doing</p>
            </div>
            <div className="list">
              <p>Done</p>
            </div>
          </div>
        </div>
      </div>
    </InterfacePageStyled>
  );
}

const InterfacePageStyled = styled.div`
  background-color: #528a177e;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    background-color: white;
    width: 1400px;
    height: 700px;
    border-radius: 15px;
    position: relative;
    overflow-y: hidden;
    display: flex;
    flex-direction: column;

    .navbar {
      background-color: red;
      height: 70px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      box-sizing: border-box;
    }
    .menu {
      display: grid;
      grid-template-columns: 80px 1fr;
      height: 100vh;
      .project {
        background-color: green;
      }
      .interface {
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
        
      }
    }
  }
`;
