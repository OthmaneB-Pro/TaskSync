import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import ButtonPrimary from "../../reusable-ui/ButtonPrimary";

export default function InterfacePage() {
  const { username } = useParams();
  const navigate = useNavigate();
  return (
    <InterfacePageStyled>
      <div className="container">
        <div className="navbar">
          InterfacePage {username}
          <ButtonPrimary
            label="Déconnexion"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        <div className="interface">
            interface
        </div>
      </div>
    </InterfacePageStyled>
  );
}

const InterfacePageStyled = styled.div`
  background-color: #528a177e;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    background-color: white;
    width: 1400px;
    height: 700px;
    border-radius: 15px;
    position: relative;
    overflow-y: hidden;
    display: flex;
    flex-direction: column;

    .navbar{
        background-color: red;
        height: 70px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        box-sizing: border-box;
    }
    .interface{
        background-color: #00d5ff;
        flex-grow :1;
        width: 100%;

    }
  }
`;
