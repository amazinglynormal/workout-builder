import { Dispatch } from "react";
import Action from "../context/workoutProgramReducerAction.type";
import ExerciseList from "../interfacesAndTypes/ExerciseList.type";
import ExerciseLocation from "../interfacesAndTypes/ExerciseLocation.interface";
import AddExerciseButton from "./AddExerciseButton";
import ExerciseDisplayListItem from "./ExerciseDisplayListItem";

interface Props {
  exercises: ExerciseList;
  day: number;
  openModal: (exerciseLocation: ExerciseLocation) => void;
  dispatch: Dispatch<Action>;
}

const ExerciseDisplay = ({ exercises, day, openModal, dispatch }: Props) => {
  const deleteExercise = (index: number, subIndex: number) => {
    dispatch({
      type: "DELETE_EXERCISE",
      exerciseLocation: { day, index, subIndex },
    });
  };

  const chosenExercises = exercises.map((exercise, index) => {
    if (exercise.length > 1) {
      const subExercises = exercise.map((ex, subIndex) => {
        return (
          <li key={`${day}${index}-${subIndex}`}>
            <ExerciseDisplayListItem
              exercise={ex}
              index={index}
              subIndex={subIndex}
              deleteExercise={deleteExercise}
            />
          </li>
        );
      });
      return (
        <li key={index}>
          <ol type="a">{subExercises}</ol>
          <AddExerciseButton
            text="giantset"
            openModal={openModal}
            exerciseLocation={{
              day,
              index,
              subIndex: subExercises.length,
            }}
          />
        </li>
      );
    } else {
      return (
        <li key={`${day}${index}-0`}>
          <ExerciseDisplayListItem
            exercise={exercise[0]}
            index={index}
            subIndex={0}
            deleteExercise={deleteExercise}
          />
          <AddExerciseButton
            text="superset"
            openModal={openModal}
            exerciseLocation={{
              day,
              index,
              subIndex: 1,
            }}
          />
        </li>
      );
    }
  });
  return (
    <div>
      <ol>{chosenExercises}</ol>
      <AddExerciseButton
        text="exercise"
        openModal={openModal}
        exerciseLocation={{ day, index: chosenExercises.length, subIndex: 0 }}
      />
    </div>
  );
};

export default ExerciseDisplay;
