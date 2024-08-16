import styled from "styled-components";

type LoginTitleType = {
  label: string;
};

export default function Title({ label }: LoginTitleType) {
  return <TitleStyled>{label}</TitleStyled>;
}

const TitleStyled = styled.h1`
  font-size: 40px;
  color: white;
  font-weight: 1000;
  text-decoration: underline #528a177e;
  -webkit-text-stroke: 2px #3755167d;
`;
