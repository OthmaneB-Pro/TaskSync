import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import InputText from "../../../reusable-ui/InputText";
import ButtonPrimary from "../../../reusable-ui/ButtonPrimary";
import LoginTitle from "../LoginTitle";

export default function LoginForm() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    navigate(`/login/${user.username}`);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prevValues) => ({ ...prevValues, [name]: value }));
  };

  return (
    <InscriptionFormStyled>
      <div className="container">
        <LoginTitle label={"Connexion"} />
        <form action="submit" onSubmit={handleSubmit}>
          <InputText
            value={user.username}
            name="username"
            type="name"
            placeholder="Nom"
            onChange={handleChange}
            label={"Nom :"}
            required
          />
          <InputText
            value={user.password}
            name="password"
            type="password"
            placeholder="Mot de passe"
            onChange={handleChange}
            label={"Mot de passe :"}
            required
          />
          <ButtonPrimary label={"Se connecter"} onClick={()=> {}} />
        </form>
      </div>
    </InscriptionFormStyled>
  );
}

const InscriptionFormStyled = styled.div`
  background-color: #528a177e;
  border: none !important;
  display: flex;
  justify-content: center;

  .container {
    background-color: white;
    width: 500px !important;
    height: 600px;
    border: 1px solid black;
    border-radius: 15px;
    position: relative;
    overflow-y: hidden;
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
