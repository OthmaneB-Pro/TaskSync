import styled from "styled-components";

type IconButtonType = {
  src: string;
  alt: string;
};

export default function IconButton({ src, alt }: IconButtonType) {
  return (
    <IconButtonStyled className="button">
      <img src={src} alt={alt} />
    </IconButtonStyled>
  );
}

const IconButtonStyled = styled.button`
  margin-top: 15px;
  margin-left: 15px;
  padding: 5px;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: white;
  border: 3px solid rgb(60, 61, 141);
  cursor: pointer;
  overflow: hidden;
  img {
    width: 35px;
  }
`;
