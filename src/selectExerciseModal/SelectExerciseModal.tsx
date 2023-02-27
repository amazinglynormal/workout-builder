import Select from "./Select";
import styles from "./SelectExerciseModal.module.css";

import exerciseData from "../exerciseData";
import { ChangeEvent, useState } from "react";
import SetsAndRepsModifier from "./SetsAndRepsModifier";
import AddNote from "./AddNote";
import AddCustomExercise from "./AddCustomExercise";

const SelectExerciseModal = () => {
  let muscleGroups = Object.keys(exerciseData);
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState(
    muscleGroups[0]
  );

  const [selectedExercise, setSelectedExercise] = useState(
    exerciseData[selectedMuscleGroup][0]
  );

  const [note, setNote] = useState<string | undefined>("");

  const [chooseExerciseMode, setChooseExerciseMode] = useState<
    "exercise-select" | "custom-exercise"
  >("exercise-select");

  const onCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const id = event.target.id;
    if (id === "use-exercise-select") {
      setSelectedExercise(exerciseData[selectedMuscleGroup][0]);
      setChooseExerciseMode("exercise-select");
    } else if (id === "use-custom-exercise") {
      setSelectedExercise("");
      setChooseExerciseMode("custom-exercise");
    }
  };

  return (
    <div className={styles.modal}>
      <div>
        <div>
          <label htmlFor="use-exercise-select">Use exercise select</label>
          <input
            type="checkbox"
            id="use-exercise-select"
            checked={chooseExerciseMode === "exercise-select"}
            onChange={onCheckboxChange}
          />
        </div>
        <Select
          id="muscle-group-select"
          label="Muscle Group"
          options={muscleGroups}
          selected={selectedMuscleGroup}
          setSelected={setSelectedMuscleGroup}
          isDisabled={chooseExerciseMode === "custom-exercise"}
        />
        <Select
          id="exercise-select"
          label="Exercises"
          options={exerciseData[selectedMuscleGroup]}
          selected={selectedExercise}
          setSelected={setSelectedExercise}
          isDisabled={chooseExerciseMode === "custom-exercise"}
        />
      </div>
      <div>
        <div>
          <label htmlFor="use-custom-exercise">Use custom exercise input</label>
          <input
            type="checkbox"
            id="use-custom-exercise"
            checked={chooseExerciseMode === "custom-exercise"}
            onChange={onCheckboxChange}
          />
        </div>
        <AddCustomExercise
          muscleGroupOptions={muscleGroups}
          isDisabled={chooseExerciseMode === "exercise-select"}
          customExercise={selectedExercise}
          selectedMuscleGroup={selectedMuscleGroup}
          setSelectedMuscleGroup={setSelectedMuscleGroup}
          setCustomExercise={setSelectedExercise}
        />
      </div>
      <div>
        <SetsAndRepsModifier />
        <AddNote note={note} setNote={setNote} />
      </div>
      <div>
        <button type="button">Add exercise</button>
        <button type="button">Cancel</button>
      </div>
    </div>
  );
};

export default SelectExerciseModal;
