import styled from "styled-components";
import InputText from "../../../../reusable-ui/InputText";
import Title from "../../../../reusable-ui/Title";
import { useContext } from "react";
import { UserContext } from "../../../../../context/UserContext";
import ButtonPrimary from "../../../../reusable-ui/ButtonPrimary";

export default function FormulaireForCard() {
  const { formulaire, setFormulaire } = useContext(UserContext);

  return (
    <AuthFormStyled>
      <div className="container">
        <Title label={"Ajouter une tâche"} />
        <form onSubmit={() => {}}>
          <InputText
            value="title"
            name="title"
            type="text"
            placeholder="Titre"
            onChange={() => {}}
            label={"Titre :"}
            required
          />
          <InputText
            value="description"
            className={"description"}
            name="description"
            type="text"
            placeholder="Description"
            onChange={() => {}}
            label={""}
            required
          />
          <InputText
            value="dueDate"
            name="dueDate"
            type="datetime-local"
            placeholder="Date de Fin"
            onChange={() => {}}
            label={"Date de Fin :"}
            required
          />
          <div className="radio">
            <InputText
              className={"radio-input"}
              value="Urgent"
              name="tags"
              type="radio"
              placeholder=""
              onChange={() => {}}
              label={"Urgent"}
              required
            />
            <InputText
              className={"radio-input"}
              value="Pas Urgent"
              name="tags"
              type="radio"
              placeholder=""
              onChange={() => {}}
              label={"Pas Urgent"}
              required
            />
          </div>

          <ButtonPrimary
            label="Revenir"
            className="button"
            onClick={() => setFormulaire(!formulaire)}
          />
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
  .description {
    height: 80px;
    width: 450px;
  }
  .radio {
    display: flex;
    margin-bottom: 0px;

    .radio-input{
        width: 100px;
        display: flex;
    }
  }
  .button{
    margin-top: 40px;
  }
`;
