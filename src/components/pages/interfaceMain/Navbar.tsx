import ButtonPrimary from "../../reusable-ui/ButtonPrimary";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";

export default function Navbar() {
  const { username } = useParams();
  const navigate = useNavigate();
  return (
    <NavbarStyled>
      InterfacePage {username}
      <ButtonPrimary
        label="Déconnexion"
        onClick={() => {
          navigate("/");
        }}
      />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.div`
  background-color: red;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
`;
