import styled from "styled-components";
import InterfaceStatus from "./status/InterfaceStatus";
import Navbar from "./navbar/Navbar";
import { UserContext } from "../../../context/UserContext";
import FormulaireForCard from "./status/formulaire/FormForCard";
import { useTask } from "../../../hooks/useTask";

export default function InterfacePage() {
  const {
    tache,
    setTache,
    formulaire,
    setFormulaire,
    formUpdated,
    setFormUpdated,
    newTask,
    setNewTask,
    onDelete,
    onMove,
    onUpdated,
  } = useTask();

  const UserContextValue = {
    tache,
    setTache,
    formulaire,
    setFormulaire,
    formUpdated,
    setFormUpdated,
    newTask,
    setNewTask,
    onDelete,
    onMove,
    onUpdated,
  };
  return (
    <UserContext.Provider value={UserContextValue}>
      <InterfacePageStyled>
        <div className="container">
          <Navbar />
          {formulaire && <FormulaireForCard />}
          {formUpdated && <FormulaireForCard />}
          <div className="menu">
            <div className="project">Projet</div>
            <InterfaceStatus />
          </div>
        </div>
      </InterfacePageStyled>
    </UserContext.Provider>
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
