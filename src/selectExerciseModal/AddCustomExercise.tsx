import { ChangeEvent, Dispatch } from "react";
import Select from "./Select";
import { ExerciseReducerAction } from "./SelectExerciseModal";

interface Props {
  isDisabled: boolean;
  muscleGroupOptions: string[];
  customExercise: string;
  selectedMuscleGroup: string;
  reducerDispatch: Dispatch<ExerciseReducerAction>;
}

const AddCustomExercise = ({
  isDisabled,
  muscleGroupOptions,
  customExercise,
  selectedMuscleGroup,
  reducerDispatch,
}: Props) => {
  const onInputTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    reducerDispatch({
      type: "UPDATE_NAME",
      newInfo: event.target.value,
    });
  };

  return (
    <div>
      <div>
        <label htmlFor="custom-exercise">Add custom exercise</label>
        <input
          id="custom-exercise"
          type="text"
          value={customExercise}
          onChange={onInputTextChange}
          disabled={isDisabled}
          placeholder="e.g Super Magic Ab Crunch"
        />
      </div>
      <Select
        id="custom-muscle-group-select"
        label="custom-muscle-group-select"
        isDisabled={isDisabled}
        options={muscleGroupOptions}
        reducerDispatch={reducerDispatch}
        selected={selectedMuscleGroup}
      />
    </div>
  );
};

export default AddCustomExercise;
