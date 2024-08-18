import styled from "styled-components";
import InputText from "../../../../../reusable-ui/InputText";
import { formFieldsConfig } from "./formConfig";

export type FormFieldsType = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  newTask: any;
};
export default function FormFields({ onChange, newTask }: FormFieldsType) {
  return (
    <FormFieldsStyled>
      {formFieldsConfig.map((field) => (
        <InputText
          key={field.name}
          value={newTask[field.name]}
          name={field.name}
          type={field.type}
          placeholder={field.placeholder}
          onChange={onChange}
          label={field.label}
          required={field.required}
          className={field.className || ""}
        />
      ))}
    </FormFieldsStyled>
  );
}

const FormFieldsStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  .description {
    height: 80px;
    width: 450px;
  }
`;