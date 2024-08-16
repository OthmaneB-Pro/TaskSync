import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import InputText from "../../reusable-ui/InputText";
import ButtonPrimary from "../../reusable-ui/ButtonPrimary";
import LoginTitle from "./LoginTitle";

export default function AuthForm({ isSignUp }: { isSignUp: boolean }) {
  const [user, setUser] = useState({
    username: "",
    password: "",
    date: isSignUp ? "" : undefined, 
  });
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/login/${user.username}`);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prevValues) => ({ ...prevValues, [name]: value }));
  };

  return (
    <AuthFormStyled>
      <div className="container">
        <LoginTitle label={isSignUp ? "Inscription" : "Connexion"} />
        <form onSubmit={handleSubmit}>
          <InputText
            value={user.username}
            name="username"
            type="text"
            placeholder="Nom"
            onChange={handleChange}
            label={"Nom :"}
            required
          />
          {isSignUp && (
            <InputText
              value={user.date || ""}
              name="date"
              type="date"
              placeholder="Date de naissance"
              onChange={handleChange}
              label={"Date de naissance :"}
              required
            />
          )}
          <InputText
            value={user.password}
            name="password"
            type="password"
            placeholder="Mot de passe"
            onChange={handleChange}
            label={"Mot de passe :"}
            required
          />
          <ButtonPrimary
            label={isSignUp ? "S'inscrire" : "Se connecter"}
            onClick={() => {}}
          />
        </form>
      </div>
    </AuthFormStyled>
  );
}

const AuthFormStyled = styled.div`
  background-color: #528a177e;
  display: flex;
  justify-content: center;

  .container {
    background-color: white;
    width: 500px;
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


