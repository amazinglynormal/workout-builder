import { ChangeEvent, Dispatch } from "react";
import { ExerciseReducerAction } from "./SelectExerciseModal";

interface Props {
  value: number;
  label: string;
  id: string;
  reducerDispatch: Dispatch<ExerciseReducerAction>;
}

const NumberInput = ({ value, label, id, reducerDispatch }: Props) => {
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    const id = event.target.id;
    switch (id) {
      case "numOfSets":
        reducerDispatch({
          type: "UPDATE_SETS_NUM",
          newInfo: newValue,
        });
        return;
      case "numOfReps":
        reducerDispatch({
          type: "UPDATE_REPS_NUM",
          newInfo: newValue,
        });
    }
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
