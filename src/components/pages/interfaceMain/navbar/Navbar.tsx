import styled from "styled-components";
import Title from "../../../reusable-ui/Title";
import NavbarRightSide from "./NavbarRightSide";

export default function Navbar() {
  return (
    <NavbarStyled>
      <div>
        <Title label="TaskSync" />
      </div>
      <NavbarRightSide/>
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
  justify-content: space-between;
  border: 1px solid #3755167d;
`;
