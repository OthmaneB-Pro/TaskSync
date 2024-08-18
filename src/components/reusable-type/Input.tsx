export type InputTextType = {
  value: string;
  name: string;
  type: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  required: boolean;
  className?: string;
};
