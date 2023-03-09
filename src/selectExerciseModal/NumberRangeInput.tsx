import { ChangeEvent, Dispatch } from "react";
import { ExerciseReducerAction } from "./SelectExerciseModal";

interface Props {
  id: string;
  lowerValue: number;
  higherValue: number;
  lowerValueLabel: string;
  higherValueLabel: string;
  currentSets: string;
  currentReps: string;
  reducerDispatch: Dispatch<ExerciseReducerAction>;
}

const NumberRangeInput = ({
  id,
  lowerValue,
  higherValue,
  lowerValueLabel,
  higherValueLabel,
  currentSets,
  currentReps,
  reducerDispatch,
}: Props) => {
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const id = event.target.id;

    switch (id) {
      case "reps-lower-value": {
        const newValue = Number(value);
        if (currentReps.includes("-")) {
          let currReps = currentReps.split("-");
          if (newValue >= Number(currReps[1])) {
            currReps[1] = (newValue + 1).toString();
          }

          reducerDispatch({
            type: "UPDATE_REPS_NUM",
            newInfo: `${newValue}-${currReps[1]}`,
          });
          return;
        }

        reducerDispatch({
          type: "UPDATE_REPS_NUM",
          newInfo: `${value}-${value + 1}`,
        });

        return;
      }
      case "reps-higher-value": {
        const newValue = Number(value);
        if (currentReps.includes("-")) {
          let currReps = currentReps.split("-");
          if (newValue <= Number(currReps[0])) {
            currReps[0] = (newValue - 1).toString();
          }

          reducerDispatch({
            type: "UPDATE_REPS_NUM",
            newInfo: `${currReps[0]}-${newValue}`,
          });
          return;
        }

        reducerDispatch({
          type: "UPDATE_REPS_NUM",
          newInfo: `${1}-${newValue}`,
        });
        return;
      }
      case "sets-lower-value": {
        const newValue = Number(value);
        if (currentSets.includes("-")) {
          let currSets = currentSets.split("-");
          if (newValue >= Number(currSets[1])) {
            currSets[1] = (newValue + 1).toString();
          }
          reducerDispatch({
            type: "UPDATE_SETS_NUM",
            newInfo: `${newValue}-${currSets[1]}`,
          });
          return;
        }

        reducerDispatch({
          type: "UPDATE_SETS_NUM",
          newInfo: `${newValue}-${newValue + 1}`,
        });
        return;
      }
      case "sets-higher-value": {
        const newValue = Number(value);
        if (currentSets.includes("-")) {
          let currSets = currentSets.split("-");
          if (newValue <= Number(currSets[0])) {
            currSets[0] = (newValue - 1).toString();
          }
          reducerDispatch({
            type: "UPDATE_SETS_NUM",
            newInfo: `${currSets[0]}-${newValue}`,
          });
          return;
        }
        reducerDispatch({
          type: "UPDATE_SETS_NUM",
          newInfo: `${1}-${newValue}`,
        });

        return;
      }
    }
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
