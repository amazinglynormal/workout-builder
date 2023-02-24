import { ChangeEvent } from "react";

interface Props {
  value: number;
  label: string;
  id: string;
  changeHandler: (id: string, newValue: string) => void;
}

const NumberInput = ({ value, label, id, changeHandler }: Props) => {
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    const id = event.target.id;
    changeHandler(id, newValue);
  };

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="number"
        min="1"
        max="100"
        value={value}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default NumberInput;
