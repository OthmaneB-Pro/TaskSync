// InputRadio.tsx
import styled from "styled-components";
import InputText from "../../../../../reusable-ui/InputText";
import { radioOptions } from "./formConfig";
import { FormFieldsType } from "./FormFields";

export default function InputRadio({ onChange }: FormFieldsType) {
  return (
    <InputRadioStyled>
      {radioOptions.map((option) => (
        <InputText
          key={option.value}
          className="radio-input"
          value={option.value}
          name={option.name}
          type="radio"
          onChange={onChange}
          label={option.label}
          placeholder=""
          required
        />
      ))}
    </InputRadioStyled>
  );
}

const InputRadioStyled = styled.div`
  display: flex;
  margin-bottom: 0px;

  .radio-input {
    width: 100px;
    display: flex;
  }
`;
