import styled from "styled-components"

export default function LoginPage() {
  return (
    <LoginPageStyled>
       <div className="container"> TaskSync</div>
       </LoginPageStyled>
  )
}

const LoginPageStyled = styled.div`
    background-color: red;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .container{
        background-color: blue;
        width: 1400px;
        height: 600px;
        
    }
`
