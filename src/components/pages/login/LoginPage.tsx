import styled from "styled-components";
import WelcomePage from "./WelcomePage";

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <div className="container">
        <WelcomePage />
        <img src="/img/ToDo.png" alt="toDo-Tableau" />
      </div>
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  background-color: #528a177e;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    background-color: white;
    width: 1400px;
    height: 600px;
    border-radius: 15px;
    border: 1px solid black;
    position: relative;
    overflow-y: hidden;

    img {
      width: 760px;
      position: absolute;
      bottom: 60px;
      left: 600px;
    }
  }
`;