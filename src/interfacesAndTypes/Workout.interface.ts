interface Workout {
  volume: {
    [muscleGroup: string]: number;
  };
  exerciseSelection: {
    [dayName: string]: {
      [exerciseOrder: string]: {
        [exerciseSubOrder: string]: {
          name: string;
          setScheme: "sets" | "set range";
          numOfSets: string;
          repScheme: "reps" | "rep range" | "rep goal";
          numOfReps: string;
        };
      };
    };
  };
}

export default Workout;
