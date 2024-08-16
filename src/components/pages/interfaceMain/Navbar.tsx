import ButtonPrimary from "../../reusable-ui/ButtonPrimary";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import Title from "../../reusable-ui/Title";
import { IoMdAdd } from "react-icons/io";

export default function Navbar() {
  const { username } = useParams();
  const navigate = useNavigate();
  return (
    <NavbarStyled>
      <Title label="TaskSync" /> {username}
      <ButtonPrimary
        className="button-add"
        label={""}
        Icon={<IoMdAdd />}
        onClick={() => {}}
      />
      <ButtonPrimary
        className="button-deconnexion"
        label="Déconnexion"
        onClick={() => {
          navigate("/");
        }}
      />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;

  .button-deconnexion {
    margin-top: 0;
    padding: 5px;
    width: 120px;
    height: 40px;
  }
  .button-add {
    margin-top: 0;
    padding: 5px;
    width: 50px;
    height: 40px;
  }
`;
