interface Workout {
  volume: {
    [muscleGroup: string]: number;
  };
  exerciseSelection: {
    [dayName: string]: {
      [exerciseOrder: string]: {
        [exerciseSubOrder: string]: {
          name: string;
          setScheme: string;
          numOfSets: number;
          repScheme: string;
          numOfReps: string;
        };
      };
    };
  };
}

export default Workout;
