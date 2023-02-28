import RepScheme from "./RepScheme.type";
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
          muscleGroup: string;
          setScheme: SetScheme;
          numOfSets: string;
          repScheme: RepScheme;
          numOfReps: string;
          note?: string;
        };
      };
    };
  };
}

export default Workout;
