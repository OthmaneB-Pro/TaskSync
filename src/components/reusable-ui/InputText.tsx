import styled from "styled-components";

type InputTextType = {
  value: string;
  name: string;
  type: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  required: boolean;
};

export default function InputText({
  value,
  name,
  type,
  placeholder,
  onChange,
  label,
  required,
}: InputTextType) {
  return (
    <InputTextStyled>
      <p>{label}</p>
      <input
        value={value}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      ></input>
    </InputTextStyled>
  );
}

const InputTextStyled = styled.div`
  input {
    width: 300px;
    height: 25px;
    padding: 5px;
    border-radius: 5px;
  }
  p {
    font-weight: 700;
  }
`;
