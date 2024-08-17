export const formFieldsConfig = [
  {
    name: "title",
    type: "text",
    placeholder: "Titre",
    label: "Titre :",
    required: true,
  },
  {
    name: "description",
    type: "text",
    placeholder: "Description",
    label: "",
    className: "description",
    required: true,
  },
  {
    name: "dueDate",
    type: "date",
    placeholder: "Date de Fin",
    label: "Date de Fin :",
    required: true,
  },
];

export const radioOptions = [
  {
    name: "tags",
    value: "Urgent",
    label: "Urgent",
  },
  {
    name: "tags",
    value: "Pas Urgent",
    label: "Pas Urgent",
  },
];
