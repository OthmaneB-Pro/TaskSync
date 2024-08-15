import styled from "styled-components";

export default function InscriptionForm() {
  return (
    <InscriptionFormStyled>
      <div className="container">
        <h1>Inscription</h1>
        <p>Nom :</p>
        <input type="name" placeholder="Nom"></input>
        <p>Date de naissance :</p>
        <input type="date"></input>
        <p>Mot de passe :</p>
        <input type="password" placeholder="Mot de passe"></input>
        <button>S'inscrire</button>
      </div>
    </InscriptionFormStyled>
  );
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
    border-radius: 15px;
    position: relative;
    overflow-y: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h1 {
    font-size: 40px;
    color: white;
    font-weight: 1000;
    text-decoration: underline #528a177e;
    -webkit-text-stroke: 2px #3755167d;
  }
  button {
    padding: 15px;
    width: 200px;
    background-color: #3755167d;
    border: 1px solid white;
    border-radius: 5px;
    color: white;
    margin-top: 100px;
    &:hover {
      background-color: white;
      color: #3755167d;
      cursor: pointer;
      border-color: #3755167d;
      transition: 0.3s;
    }
  }
  input {
    width: 300px;
    height: 25px;
    padding: 5px;
    border-radius: 5px;
  }
`;
