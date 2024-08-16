import { useState } from "react";
import styled from "styled-components";
import InscriptionForm from "./inscriptionForm/InscriptionForm";
import LoginForm from "./loginForm/LoginForm";

export default function WelcomePage() {
const [formType, setFormType] = useState("")

  if(formType === "inscription"){return <InscriptionForm/> }
  if(formType === "connexion"){return <LoginForm/>}

  return (
    <LoginFormStyled>
      <h1>Bienvenue sur TaskSync !</h1>
      <p>
        Votre solution tout-en-un pour organiser et synchroniser vos tâches.
        Gérez facilement vos projets, suivez vos progrès et collaborez en temps
        réel, le tout depuis un seul endroit. Restez productif et simplifiez
        votre quotidien avec TaskSync !
      </p>
      <p>Connectez-vous ! Pas encore de compte ? Inscrivez-vous</p>
     <button onClick={() => {setFormType("inscription")}}>S'inscrire</button>
    <button onClick={() => {setFormType("connexion")}}>Se connecter</button>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.div`
margin-left: 120px;
margin-top: 50px;
width: 500px;
text-align: center;
border: 2px solid #3755167d;
padding: 20px 20px 82px 20px;
border-radius: 10px;

  h1 {
    margin-bottom: 35px;
    font-size: 40px;
    color: white;
    font-weight: 1000;
    text-decoration: underline #528a177e;
    -webkit-text-stroke: 2px #3755167d;
  }

  button {
    padding: 15px;
    margin-top: 110px;
    width: 200px;
    background-color: #3755167d;
    border: 1px solid white;
    border-radius: 5px;
    color: white;
    &:hover {
      background-color: white;
      color: #3755167d;
      cursor: pointer;
      border-color: #3755167d;
      transition: 0.3s;
    }
  }
`;
