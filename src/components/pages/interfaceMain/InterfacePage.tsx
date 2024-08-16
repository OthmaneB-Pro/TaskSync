import styled from "styled-components";
import InterfaceStatus from "./status/InterfaceStatus";
import Navbar from "./navbar/Navbar";

export default function InterfacePage() {
  return (
    <InterfacePageStyled>
      <div className="container">
        <Navbar />
        <div className="menu">
          <div className="project">Projet</div>
          <InterfaceStatus />
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
    border: 2px solid #3755167d;
    position: relative;
    overflow-y: hidden;
    display: flex;
    flex-direction: column;
    .menu {
      display: grid;
      grid-template-columns: 80px 1fr;
      height: 100vh;
      .project {
        background-color: #3755167d;
      }
    }
  }
`;
