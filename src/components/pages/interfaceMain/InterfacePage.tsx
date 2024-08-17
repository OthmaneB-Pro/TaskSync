import styled from "styled-components";
import InterfaceStatus from "./status/InterfaceStatus";
import Navbar from "./navbar/Navbar";
import { tasks } from "../../../fakeData/fakeTask";
import { useState } from "react";
import { TaskType } from "../../reusable-type/TaskCard";
import { UserContext } from "../../../context/UserContext";
import FormulaireForCard from "./status/formulaire/FormulaireForCard";

export default function InterfacePage() {
  const [tache, setTache] = useState<TaskType[]>(tasks);
  const [formulaire, setFormulaire] = useState(false);

  const UserContextValue = {
    tache,
    setTache,
    formulaire,
    setFormulaire,
  };
  return (
    <UserContext.Provider value={UserContextValue}>
      <InterfacePageStyled>
        <div className="container">
          <Navbar />
          {formulaire && <FormulaireForCard/>}
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
