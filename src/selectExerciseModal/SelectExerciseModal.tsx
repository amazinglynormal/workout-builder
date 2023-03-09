import Select from "./Select";
import styles from "./SelectExerciseModal.module.css";

import exerciseData from "../exerciseData";
import { ChangeEvent, useState } from "react";
import SetsAndRepsModifier from "./SetsAndRepsModifier";
import AddNote from "./AddNote";
import AddCustomExercise from "./AddCustomExercise";
import ExerciseLocation from "../interfacesAndTypes/ExerciseLocation.interface";
import Exercise from "../interfacesAndTypes/Exercise.interface";
import SetScheme from "../interfacesAndTypes/SetScheme.type";
import RepScheme from "../interfacesAndTypes/RepScheme.type";
import { useImmerReducer } from "use-immer";
import {
  useWorkoutProgram,
  useWorkoutProgramDispatch,
} from "../context/WorkoutProgramContext";
import defaultExercise from "../utils/defaultExercise";

interface Props {
  closeModal: () => void;
  exerciseLocation: ExerciseLocation;
}

export type ExerciseReducerAction =
  | {
      type:
        | "UPDATE_NAME"
        | "UPDATE_MUSCLE_GROUP"
        | "UPDATE_SETS_NUM"
        | "UPDATE_REPS_NUM";
      newInfo: string;
    }
  | {
      type: "UPDATE_SET_SCHEME";
      newInfo: SetScheme;
    }
  | {
      type: "UPDATE_REP_SCHEME";
      newInfo: RepScheme;
    }
  | {
      type: "UPDATE_NOTE";
      newInfo: string | undefined;
    };

function exerciseReducer(draft: Exercise, action: ExerciseReducerAction) {
  switch (action.type) {
    case "UPDATE_NAME":
      draft.name = action.newInfo;
      break;
    case "UPDATE_MUSCLE_GROUP":
      draft.muscleGroup = action.newInfo;
      break;
    case "UPDATE_SETS_NUM":
      draft.numOfSets = action.newInfo;
      break;
    case "UPDATE_REPS_NUM":
      draft.numOfReps = action.newInfo;
      break;
    case "UPDATE_NOTE":
      draft.note = action.newInfo;
      break;
    case "UPDATE_SET_SCHEME":
      draft.setScheme = action.newInfo;
      break;
    case "UPDATE_REP_SCHEME":
      draft.repScheme = action.newInfo;
      break;
  }
}

const SelectExerciseModal = ({ closeModal, exerciseLocation }: Props) => {
  const { exerciseSelection } = useWorkoutProgram();
  const dispatch = useWorkoutProgramDispatch();

  let startExercise = exerciseSelection[exerciseLocation.day].exercises[
    exerciseLocation.index
  ].at(exerciseLocation.subIndex);

  if (!startExercise) {
    startExercise = defaultExercise;
  }

  const [exercise, exerciseDispatch] = useImmerReducer(
    exerciseReducer,
    startExercise
  );
  let muscleGroups = Object.keys(exerciseData);

  const [chooseExerciseMode, setChooseExerciseMode] = useState<
    "exercise-select" | "custom-exercise"
  >("exercise-select");

  const onCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const id = event.target.id;
    if (id === "use-exercise-select") {
      exerciseDispatch({
        type: "UPDATE_NAME",
        newInfo: exerciseData[exercise.muscleGroup][0],
      });
      setChooseExerciseMode("exercise-select");
    } else if (id === "use-custom-exercise") {
      exerciseDispatch({
        type: "UPDATE_NAME",
        newInfo: "Super Magic Ab Crunch",
      });
      setChooseExerciseMode("custom-exercise");
    }
  };

  return (
    <div className={styles.overlay} onClick={closeModal}>
      <div
        className={styles.modal}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
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
            selected={exercise.muscleGroup}
            reducerDispatch={exerciseDispatch}
            isDisabled={chooseExerciseMode === "custom-exercise"}
          />
          <Select
            id="exercise-select"
            label="Exercises"
            options={exerciseData[exercise.muscleGroup]}
            selected={exercise.name}
            reducerDispatch={exerciseDispatch}
            isDisabled={chooseExerciseMode === "custom-exercise"}
          />
        </div>
        <div>
          <div>
            <label htmlFor="use-custom-exercise">
              Use custom exercise input
            </label>
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
            customExercise={exercise.name}
            selectedMuscleGroup={exercise.muscleGroup}
            reducerDispatch={exerciseDispatch}
          />
        </div>
        <div>
          <SetsAndRepsModifier
            reducerDispatch={exerciseDispatch}
            exercise={exercise}
          />
          <AddNote note={exercise.note} setNote={exerciseDispatch} />
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              const type = startExercise ? "EDIT_EXERCISE" : "ADD_EXERCISE";
              dispatch({
                type,
                exerciseLocation,
                newExerciseInfo: exercise,
              });
            }}
          >
            Add exercise
          </button>
          <button type="button" onClick={closeModal}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectExerciseModal;
