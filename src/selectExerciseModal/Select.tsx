import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface Props {
  id: string;
  label: string;
  options:
    | string[]
    | {
        [name: string]: string[];
      };
  isDisabled?: boolean;
  selected: string;
  setSelected: Dispatch<SetStateAction<any>>;
}

const Select = ({
  id,
  label,
  options,
  isDisabled = false,
  selected,
  setSelected,
}: Props) => {
  const isSelectOptionsArray = Array.isArray(options);

  let selectOptions;
  if (isSelectOptionsArray) {
    selectOptions = options.map((option) => {
      return (
        <option key={option} value={option}>
          {option}
        </option>
      );
    });
  } else {
    selectOptions = Object.keys(options).map((option) => {
      const exercises = options[option].map((exercise) => {
        return (
          <option key={exercise} value={exercise}>
            {exercise}
          </option>
        );
      });
      return (
        <optgroup key={option} label={option}>
          {exercises}
        </optgroup>
      );
    });
  }

  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const option = event.target.value;
    setSelected(option);
  };

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        disabled={isDisabled}
        value={selected}
        onChange={onChangeHandler}
      >
        {selectOptions}
      </select>
    </div>
  );
};

export default Select;
