import styled from "styled-components"
import LoginForm from "./LoginForm"

export default function LoginPage() {
  return (
    <LoginPageStyled>
       <div className="container">
         <LoginForm/>
        </div>
       </LoginPageStyled>
  )
}

const LoginPageStyled = styled.div`
    background-color: #528a177e;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .container{
        background-color: white;
        width: 1400px;
        height: 600px;
        border-radius: 15px;
        border: 1px solid black;
    }
`
