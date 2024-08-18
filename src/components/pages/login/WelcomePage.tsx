import { useState } from "react";
import styled from "styled-components";
import AuthForm from "./AuthForm";
import Title from "../../reusable-ui/Title";
import ButtonPrimary from "../../reusable-ui/ButtonPrimary";
import Paragraph from "./Paragraph";

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
      <Paragraph />
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
