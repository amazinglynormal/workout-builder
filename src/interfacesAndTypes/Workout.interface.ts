import Exercise from "./Exercise.interface";

interface Workout {
  volume: {
    [muscleGroup: string]: number;
  };
  exerciseSelection: {
    [dayNumber: string]: {
      title: string;
      exercises: Exercise | Exercise[];
    };
  };
}

export default Workout;
