import styled from "styled-components";
import InputText from "../../../../reusable-ui/InputText";

export default function FormFields() {
  return (
    <FormFieldsStyled>
      <InputText
        value="title"
        name="title"
        type="text"
        placeholder="Titre"
        onChange={() => {}}
        label={"Titre :"}
        required
      />
      <InputText
        value="description"
        className={"description"}
        name="description"
        type="text"
        placeholder="Description"
        onChange={() => {}}
        label={""}
        required
      />
      <InputText
        value="dueDate"
        name="dueDate"
        type="datetime-local"
        placeholder="Date de Fin"
        onChange={() => {}}
        label={"Date de Fin :"}
        required
      />
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
