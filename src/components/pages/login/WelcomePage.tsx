import { useState } from "react";
import styled from "styled-components";
import AuthForm from "./AuthForm";
import Title from "../../reusable-ui/Title";
import ButtonPrimary from "../../reusable-ui/ButtonPrimary";
import Paragraph from "../../reusable-ui/Paragraph";

export default function WelcomePage() {
  const [formType, setFormType] = useState("");

  if (formType === "inscription") {
    return <AuthForm isSignUp={true} />;
  }
  if (formType === "connexion") {
    return <AuthForm isSignUp={false} />;
  }

  return (
    <LoginFormStyled>
      <Title label="Bienvenue sur TaskSync !" />
      <Paragraph
        text="Votre solution tout-en-un pour organiser et synchroniser vos tâches.
        Gérez facilement vos projets, suivez vos progrès et collaborez en temps
        réel, le tout depuis un seul endroit. Restez productif et simplifiez
        votre quotidien avec TaskSync !"
      />
      <Paragraph text="Connectez-vous ! Pas encore de compte ? Inscrivez-vous" />
      <ButtonPrimary
        onClick={() => {
          setFormType("inscription");
        }}
        label="S'inscrire"
      />
      <ButtonPrimary
        onClick={() => {
          setFormType("connexion");
        }}
        label="Se connecter"
      />
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
`;
