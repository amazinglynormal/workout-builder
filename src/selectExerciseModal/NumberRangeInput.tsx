import { ChangeEvent } from "react";

interface Props {
  id: string;
  lowerValue: number;
  higherValue: number;
  lowerValueLabel: string;
  higherValueLabel: string;
  changeHandler: (id: string, newValue: string) => void;
}

const NumberRangeInput = ({
  id,
  lowerValue,
  higherValue,
  lowerValueLabel,
  higherValueLabel,
  changeHandler,
}: Props) => {
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    const id = event.target.id;

    changeHandler(id, newValue);
  };

  return (
    <div>
      <div>
        <label htmlFor={`${id}-lower-value`}>{lowerValueLabel}</label>
        <input
          id={`${id}-lower-value`}
          type="number"
          min="1"
          max="100"
          value={lowerValue}
          onChange={onChangeHandler}
        />
      </div>
      <span>-</span>
      <div>
        <label htmlFor={`${id}-higher-value`}>{higherValueLabel}</label>
        <input
          id={`${id}-higher-value`}
          type="number"
          min="2"
          max="100"
          value={higherValue}
          onChange={onChangeHandler}
        />
      </div>
    </div>
  );
};

export default NumberRangeInput;
