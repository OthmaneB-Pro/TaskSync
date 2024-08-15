import styled from "styled-components";

export default function InscriptionForm() {
  return (
    <InscriptionFormStyled>
        <div className="container">
            <h1>Inscription</h1>    
            <input type="name"></input>
            <input type="password"></input>
            <button>S'inscrire</button>
        </div>
    </InscriptionFormStyled>
  )
}

const InscriptionFormStyled = styled.div`
  background-color: #528a177e;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    background-color: white;
    width: 500px;
    height: 600px;
    border: 1px solid black;
    position: relative;
    overflow-y: hidden;
    display: flex;
    flex-direction: column;
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
  input{
    width: 240px;
    padding: 5px;
  }
`;
