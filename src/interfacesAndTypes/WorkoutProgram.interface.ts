import ExerciseList from "./ExerciseList.type";

interface WorkoutProgram {
  numOfDaysPerWeek: number;
  numOfWeeks: number;
  volume: {
    [muscleGroup: string]: number;
  };
  exerciseSelection: [
    {
      title: string;
      exercises: ExerciseList;
    }
  ];
}

export default WorkoutProgram;
