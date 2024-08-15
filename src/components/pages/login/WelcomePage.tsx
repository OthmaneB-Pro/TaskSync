import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function LoginForm() {
    const navigate = useNavigate()

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
     <button onClick={() => navigate("/")}>S'inscrire</button>
    <button onClick={() => navigate("/")}>Se connecter</button>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.div`
margin-left: 30px;
margin-top: 36px;
width: 500px;
text-align: center;
border: 2px solid #3755167d;
padding: 20px 20px 193px 20px;
border-radius: 10px;
background-color: #c5e99f9b;

  h1 {
    margin-bottom: 35px;
  }

  button {
    padding: 15px;
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
