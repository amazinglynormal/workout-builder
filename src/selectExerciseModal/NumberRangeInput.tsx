import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface Props {
  lowerValue: number;
  higherValue: number;
  setLowerValue: Dispatch<SetStateAction<number>>;
  setHigherValue: Dispatch<SetStateAction<number>>;
  lowerValueLabel: string;
  higherValueLabel: string;
}

const NumberRangeInput = ({
  lowerValue,
  higherValue,
  setLowerValue,
  setHigherValue,
  lowerValueLabel,
  higherValueLabel,
}: Props) => {
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    const id = event.target.id;

    if (id === "lower-value" && newValue >= higherValue) {
      return;
    }

    switch (id) {
      case "higher-value":
        setHigherValue(newValue);
        break;
      case "lower-value":
        setLowerValue(newValue);
        break;
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="lower-value">{lowerValueLabel}</label>
        <input
          id="lower-value"
          type="number"
          min="1"
          max="100"
          value={lowerValue}
          onChange={onChangeHandler}
        />
      </div>
      <span>-</span>
      <div>
        <label htmlFor="higher-value">{higherValueLabel}</label>
        <input
          id="higher-value"
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
