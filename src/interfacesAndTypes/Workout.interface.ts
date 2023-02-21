import SetScheme from "./SetScheme.type";

interface Workout {
  volume: {
    [muscleGroup: string]: number;
  };
  exerciseSelection: {
    [dayName: string]: {
      [exerciseOrder: string]: {
        [exerciseSubOrder: string]: {
          name: string;
          setScheme: SetScheme;
          numOfSets: string;
          repScheme: "reps" | "rep range" | "rep goal";
          numOfReps: string;
        };
      };
    };
  };
}

export default Workout;
