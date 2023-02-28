import ExerciseList from "./ExerciseList.type";

interface Workout {
  volume: {
    [muscleGroup: string]: number;
  };
  exerciseSelection: {
    [dayNumber: string]: {
      title: string;
      exercises: ExerciseList;
    };
  };
}

export default Workout;
