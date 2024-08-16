import styled from "styled-components";

type ButtonPrimaryType = {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
  Icon?: JSX.Element;
};

export default function ButtonPrimary({
  onClick,
  label,
  className,
  Icon,
}: ButtonPrimaryType) {
  return (
    <ButtonPrimaryStyled onClick={onClick} className={className}>
      {Icon && Icon}
      {label}
    </ButtonPrimaryStyled>
  );
}

const ButtonPrimaryStyled = styled.button`
  padding: 15px;
  width: 200px;
  background-color: #3755167d;
  border: 1px solid white;
  border-radius: 5px;
  color: white;
  margin-top: 100px;
  font-size: 16px;
  &:hover {
    background-color: white;
    color: #3755167d;
    cursor: pointer;
    border-color: #3755167d;
    transition: 0.3s;
  }
`;
