import { ChangeEvent, Dispatch, SetStateAction } from "react";
import Select from "./Select";

interface Props {
  isDisabled: boolean;
  muscleGroupOptions: string[];
  customExercise: string;
  setCustomExercise: Dispatch<SetStateAction<string>>;
  selectedMuscleGroup: string;
  setSelectedMuscleGroup: Dispatch<SetStateAction<string>>;
}

const AddCustomExercise = ({
  isDisabled,
  muscleGroupOptions,
  customExercise,
  setCustomExercise,
  selectedMuscleGroup,
  setSelectedMuscleGroup,
}: Props) => {
  const onInputTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCustomExercise(event.target.value);
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
        setSelected={setSelectedMuscleGroup}
        selected={selectedMuscleGroup}
      />
    </div>
  );
};

export default AddCustomExercise;
