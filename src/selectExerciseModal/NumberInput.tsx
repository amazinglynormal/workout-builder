import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface Props {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
  label: string;
  id: string;
}

const NumberInput = ({ value, setValue, label, id }: Props) => {
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    setValue(newValue);
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
