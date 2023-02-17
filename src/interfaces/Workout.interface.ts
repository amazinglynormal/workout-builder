interface Workout {
  numOfWorkoutDays: number;
  numOfWeeksToRunWorkout: number;
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
          dropsets: number;
        };
      };
    };
  };
}

export default Workout;
