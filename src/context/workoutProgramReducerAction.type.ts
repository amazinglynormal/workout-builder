import Exercise from "../interfacesAndTypes/Exercise.interface";
import ExerciseLocation from "../interfacesAndTypes/ExerciseLocation.interface";

type EditTitleAction = {
  type: "EDIT_TITLE";
  newTitle: string;
  day: number;
};

type EditExerciseAction = {
  type: "EDIT_EXERCISE";
  newExerciseInfo: Exercise;
  exerciseLocation: ExerciseLocation;
};

type AddExerciseAction = {
  type: "ADD_EXERCISE";
  newExerciseInfo: Exercise;
  exerciseLocation: ExerciseLocation;
};

type DeleteExerciseAction = {
  type: "DELETE_EXERCISE";
  exerciseLocation: ExerciseLocation;
};

type EditNumOfDaysAction = {
  type: "EDIT_NUM_OF_DAYS";
  newNumOfDays: number;
};

type EditNumOfWeeksAction = {
  type: "EDIT_NUM_OF_WEEKS";
  newNumOfWeeks: number;
};

type Action =
  | EditTitleAction
  | EditExerciseAction
  | AddExerciseAction
  | DeleteExerciseAction
  | EditNumOfDaysAction
  | EditNumOfWeeksAction;

export default Action;
