import { IoMdAdd } from "react-icons/io"
import styled from "styled-components"
import ButtonPrimary from "../../../reusable-ui/ButtonPrimary"

export default function ProjectPage() {
  return (
    <ProjectPageStyled>
        <button className="button"><img src="/img/phone.webp" alt="telephone" /></button>
        <button className="button"><img src="/img/ecole.PNG" alt="ecole" /></button>
        <button className="button"><img src="/img/dev.png" alt="developpeur" /></button>
        <button className="button"><img src="/img/tax.png" alt="tax" /></button>
        <button className="button"><img src="/img/diner.jpeg" alt="diner" /></button>
        <ButtonPrimary label="" onClick={() => {}} Icon={<IoMdAdd/>} className="button-add" />
    </ProjectPageStyled>
  )
}


const ProjectPageStyled = styled.div`
    background-color: #3755167d;  

    .button-add {
    margin-top: 20px;
    margin-left: 15px;
    width: 50px;
    height: 50px;
    border-radius: 50px;
  }
    .button{
    margin-top: 15px;
    margin-left: 15px;
    padding: 5px;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: white;
    border: 3px solid rgb(60, 61, 141);
    cursor : pointer;
    overflow: hidden;
    img{
        width: 35px;
    }
    svg{ 
        width: 35px;
        height: 40px;
    }
  }
`