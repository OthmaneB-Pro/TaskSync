import styled from "styled-components";
import Title from "../../../../reusable-ui/Title";
import { useContext } from "react";
import { UserContext } from "../../../../../context/UserContext";
import ButtonPrimary from "../../../../reusable-ui/ButtonPrimary";
import InputRadio from "./inputForm/InputRadio";
import FormFields from "./inputForm/FormFields";

export default function FormulaireForCard() {
  const {
    tache,
    setTache,
    formulaire,
    setFormulaire,
    formUpdated,
    setFormUpdated,
    newTask,
    setNewTask,
  } = useContext(UserContext);

  const handleAddTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updatedTasks = tache.map((task) =>
      task.id === newTask.id ? newTask : task
    );
    setTache(updatedTasks);    
    setFormulaire(false);
    setFormUpdated(false);
    setNewTask({
      id: Date.now(),
      title: "",
      description: "",
      dueDate: "",
      tags: "",
      status: "To Do",
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  return (
    <AuthFormStyled>
      <div className="container">
        <Title label={formulaire ? "Ajouter une tâche" : "Modifier la tache"} />
        <form onSubmit={handleAddTask}>
          <FormFields newTask={newTask} onChange={handleChange} />
          <InputRadio newTask={newTask} onChange={handleChange} />
          <ButtonPrimary
            label="Revenir"
            className="button"
            onClick={() => {}}
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
  .button {
    margin-top: 50px;
  }
`;
