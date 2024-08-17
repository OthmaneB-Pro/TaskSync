import styled from "styled-components";
import InputText from "../../../../../reusable-ui/InputText";

export type FormFieldsType = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  newTask: any;
};

export default function FormFields({ onChange, newTask }: FormFieldsType) {
  return (
    <FormFieldsStyled>
      <InputText
        value={newTask.title}
        name="title"
        type="text"
        placeholder="Titre"
        onChange={onChange}
        label={"Titre :"}
        required
      />
      <InputText
        value={newTask.description}
        className={"description"}
        name="description"
        type="text"
        placeholder="Description"
        onChange={onChange}
        label={""}
        required
      />
      <InputText
        value={newTask.dueDate}
        name="dueDate"
        type="date"
        placeholder="Date de Fin"
        onChange={onChange}
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
