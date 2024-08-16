import styled from "styled-components";
import WelcomePage from "./WelcomePage";

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <div className="container">
        <WelcomePage />
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
    width: 800px;
    height: 600px;
    border-radius: 15px;
    position: relative;
    overflow-y: hidden;
  }
`;
