import styled from "styled-components";
import InputText from "../../../../reusable-ui/InputText";
import Title from "../../../../reusable-ui/Title";
import { useContext } from "react";
import { UserContext } from "../../../../../context/UserContext";
import ButtonPrimary from "../../../../reusable-ui/ButtonPrimary";


export default function FormulaireForCard() {
    const {formulaire, setFormulaire} = useContext(UserContext)
  return (
    <AuthFormStyled>
      <div className="container">
        <Title label={"Ajouter une tâche"} />
        <form onSubmit={() => {}}>
          <InputText
          value=""
            name="username"
            type="text"
            placeholder="Nom"
            onChange={() => {}}
            label={"Nom :"}
            required
          />
            <InputText
            value=""
              name="date"
              type="date"
              placeholder="Date de naissance"
              onChange={() => {}}
              label={"Date de naissance :"}
              required
            />
          
          <InputText
          value=""
            name="password"
            type="password"
            placeholder="Mot de passe"
            onChange={() => {}}
            label={"Mot de passe :"}
            required
          />

          <ButtonPrimary label="Revenir" onClick={() => setFormulaire(!formulaire)} />
        </form>
      </div>
    </AuthFormStyled>
  );
}

const AuthFormStyled = styled.div`
  position: fixed; 
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px); 
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000; 

  .container {
    background-color: white;
    width: 500px !important;
    height: 600px;
    border: 1px solid black;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation-duration: 0.3s;
    animation-name: animate-fade;
    @keyframes animate-fade {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
