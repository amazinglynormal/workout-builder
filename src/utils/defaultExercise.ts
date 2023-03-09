import Exercise from "../interfacesAndTypes/Exercise.interface";
import exerciseData from "../exerciseData";

const defaultExercise: Exercise = {
  name: exerciseData["Abs"][0],
  muscleGroup: "Abs",
  setScheme: "Sets",
  numOfSets: "1",
  repScheme: "Reps",
  numOfReps: "1",
};

export default defaultExercise;
