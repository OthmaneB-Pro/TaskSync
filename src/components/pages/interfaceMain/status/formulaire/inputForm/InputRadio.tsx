import styled from "styled-components";
import InputText from "../../../../../reusable-ui/InputText";
import { FormFieldsType } from "./FormFields";

export default function InputRadio({ onChange }: FormFieldsType) {
  return (
    <InputRadioStyled>
      <InputText
        className={"radio-input"}
        value={"Urgent"}
        name="tags"
        type="radio"
        placeholder=""
        onChange={onChange}
        label={"Urgent"}
        required
      />
      <InputText
        className={"radio-input"}
        value={"Pas Urgent"}
        name="tags"
        type="radio"
        placeholder=""
        onChange={onChange}
        label={"Pas Urgent"}
        required
      />
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
