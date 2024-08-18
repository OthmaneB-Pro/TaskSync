import { IoMdAdd } from "react-icons/io";
import styled from "styled-components";
import ButtonPrimary from "../../../reusable-ui/ButtonPrimary";
import IconButton from "../../../reusable-ui/IconButton";
import { iconConfig } from "./projectConfig";

export default function ProjectPage() {
  return (
    <ProjectPageStyled>
      {iconConfig.map((img) => (
        <IconButton src={img.src} alt={img.alt} />
      ))}
      <ButtonPrimary
        label=""
        onClick={() => {}}
        Icon={<IoMdAdd />}
        className="button-add"
      />
      {/* Continuez le code, ajoutez la fonctionnalité pour passer d'un projet à l'autre avec les boutons.
      Ajoutez également qu'avec le bouton +, un formulaire s'ouvre pour ajouter une icône et donc un projet.*/}
    </ProjectPageStyled>
  );
}

const ProjectPageStyled = styled.div`
  background-color: #3755167d;
  .button-add {
    margin-top: 20px;
    margin-left: 15px;
    width: 50px;
    height: 50px;
    border-radius: 50px;
  }
`;
