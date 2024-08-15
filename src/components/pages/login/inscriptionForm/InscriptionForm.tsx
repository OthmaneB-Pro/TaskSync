import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

export default function InscriptionForm() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    date: "",
  });
  const navigate = useNavigate()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    navigate(`/login/${user.username}`)
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prevValues) => ({ ...prevValues, [name]: value }));
  };

  return (
    <InscriptionFormStyled>
      <div className="container">
        <h1>Inscription</h1>
        <form action="submit">
          <p>Nom :</p>
          <input
            value={user.username}
            name="username"
            type="name"
            placeholder="Nom"
            onChange={handleChange}
          ></input>
          <p>Date de naissance :</p>
          <input
            value={user.date}
            name="date"
            type="date"
            onChange={handleChange}
          ></input>
          <p>Mot de passe :</p>
          <input
            value={user.password}
            name="password"
            type="password"
            placeholder="Mot de passe"
            onChange={handleChange}
          ></input>
          <button onClick={handleClick}>S'inscrire</button>
        </form>
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
  p {
    font-weight: 700;
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
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
