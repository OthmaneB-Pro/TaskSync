import { useNavigate, useParams } from "react-router";
import ButtonPrimary from "../../../reusable-ui/ButtonPrimary";
import { IoMdAdd } from "react-icons/io";
import styled from "styled-components";
import Title from "../../../reusable-ui/Title";

export default function NavbarRightSide() {
  const { username } = useParams();
  const navigate = useNavigate();

  return (
    <NavbarRightSideStyled>
      <Title label={`${username}`} />
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
          if(window.confirm("Etes vous sur")){
          navigate("/");}
        }}
      />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  .button-add {
    margin-top: 0;
    margin-left: 30px;
    padding: 5px;
    width: 50px;
    height: 40px;
  }
  .button-deconnexion {
    margin-top: 0;
    padding: 5px;
    width: 120px;
    height: 40px;
  }
  
`;
