import { ChangeEvent, Dispatch } from "react";
import exerciseData from "../exerciseData";
import { ExerciseReducerAction } from "./SelectExerciseModal";

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
  reducerDispatch: Dispatch<ExerciseReducerAction>;
}

const Select = ({
  id,
  label,
  options,
  isDisabled = false,
  selected,
  reducerDispatch,
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
    let option = event.target.value;
    const id = event.target.id;

    if (id === "Sets" && (option === "Sets" || option === "Set Range")) {
      reducerDispatch({
        type: "UPDATE_SET_SCHEME",
        newInfo: option,
      });

      return;
    }

    if (
      id === "Reps" &&
      (option === "Reps" || option === "Rep Range" || option === "Rep Goal")
    ) {
      reducerDispatch({
        type: "UPDATE_REP_SCHEME",
        newInfo: option,
      });

      return;
    }

    const dispatchAction: ExerciseReducerAction = {
      type: "UPDATE_MUSCLE_GROUP",
      newInfo: "Abs",
    };

    switch (id) {
      case "custom-muscle-group-select":
      case "muscle-group-select":
        dispatchAction.type = "UPDATE_MUSCLE_GROUP";
        dispatchAction.newInfo = option;
        reducerDispatch(dispatchAction);
        reducerDispatch({
          type: "UPDATE_NAME",
          newInfo: exerciseData[option][0],
        });
        break;
      case "exercise-select":
        dispatchAction.type = "UPDATE_NAME";
        dispatchAction.newInfo = option;
        break;
      default:
        return;
    }

    reducerDispatch(dispatchAction);
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
