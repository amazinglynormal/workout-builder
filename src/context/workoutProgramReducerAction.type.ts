import Exercise from "../interfacesAndTypes/Exercise.interface";
import ExerciseLocation from "../interfacesAndTypes/ExerciseLocation.interface";
import WorkoutProgram from "../interfacesAndTypes/WorkoutProgram.interface";

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

type ResetDayAction = {
  type: "RESET_DAY";
  day: number;
};

type SetEntireProgram = {
  type: "SET_ENTIRE_PROGRAM";
  newProgram: WorkoutProgram;
};

type Action =
  | EditTitleAction
  | EditExerciseAction
  | AddExerciseAction
  | DeleteExerciseAction
  | EditNumOfDaysAction
  | EditNumOfWeeksAction
  | ResetDayAction
  | SetEntireProgram;

export default Action;
