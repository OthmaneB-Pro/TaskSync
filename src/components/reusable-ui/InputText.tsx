import styled from "styled-components";

type InputTextType = {
  value: string;
  name: string;
  type: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputText({
  value,
  name,
  type,
  placeholder,
  onChange,
}: InputTextType) {
  return (
    <InputTextStyled
      value={value}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    ></InputTextStyled>
  );
}

const InputTextStyled = styled.input`
    width: 300px;
    height: 25px;
    padding: 5px;
    border-radius: 5px;
`