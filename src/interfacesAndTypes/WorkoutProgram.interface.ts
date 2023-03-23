import ExerciseList from "./ExerciseList.type";

interface ExerciseDay {
  title: string;
  exercises: ExerciseList;
}

interface WorkoutProgram {
  numOfDaysPerWeek: number;
  numOfWeeks: number;
  volume: {
    [muscleGroup: string]: number;
  };
  exerciseSelection: ExerciseDay[];
}

export default WorkoutProgram;
