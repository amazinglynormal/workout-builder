import { Dispatch, useState } from "react";
import RepScheme, { repSchemes } from "../interfacesAndTypes/RepScheme.type";
import SetScheme, { setSchemes } from "../interfacesAndTypes/SetScheme.type";
import Select from "./Select";
import NumberRangeInput from "./NumberRangeInput";
import NumberInput from "./NumberInput";
import { ExerciseReducerAction } from "./SelectExerciseModal";
import Exercise from "../interfacesAndTypes/Exercise.interface";

interface Props {
  reducerDispatch: Dispatch<ExerciseReducerAction>;
  exercise: Exercise;
}

const SetsAndRepsModifier = ({ reducerDispatch, exercise }: Props) => {
  return (
    <div>
      <div>
        {" "}
        <Select
          id="Sets"
          label="Sets"
          options={setSchemes}
          selected={exercise.setScheme}
          reducerDispatch={reducerDispatch}
        />
        {exercise.setScheme === "Set Range" ? (
          <NumberRangeInput
            id="sets"
            lowerValueLabel="Lower end of range"
            higherValueLabel="Higher end of range"
            lowerValue={Number(exercise.numOfSets.split("-")[0])}
            higherValue={Number(exercise.numOfSets.split("-")[1])}
            currentSets={exercise.numOfSets}
            currentReps={exercise.numOfReps}
            reducerDispatch={reducerDispatch}
          />
        ) : (
          <NumberInput
            id="numOfSets"
            label="Number of sets"
            value={Number(exercise.numOfSets)}
            reducerDispatch={reducerDispatch}
          />
        )}
      </div>
      <div>
        {" "}
        <Select
          id="Reps"
          label="Reps"
          options={repSchemes}
          selected={exercise.repScheme}
          reducerDispatch={reducerDispatch}
        />{" "}
        {exercise.repScheme === "Rep Range" ? (
          <NumberRangeInput
            id="reps"
            lowerValueLabel="Lower end of range"
            higherValueLabel="Higher end of range"
            lowerValue={Number(exercise.numOfReps.split("-")[0])}
            higherValue={Number(exercise.numOfReps.split("-")[1])}
            currentSets={exercise.numOfSets}
            currentReps={exercise.numOfReps}
            reducerDispatch={reducerDispatch}
          />
        ) : (
          <NumberInput
            id="numOfReps"
            label="Number of reps"
            value={Number(exercise.numOfReps)}
            reducerDispatch={reducerDispatch}
          />
        )}
      </div>
    </div>
  );
};

export default SetsAndRepsModifier;
