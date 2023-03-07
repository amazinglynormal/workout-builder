import ExerciseList from "./ExerciseList.type";

interface WorkoutProgram {
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
