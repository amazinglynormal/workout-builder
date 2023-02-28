import RepScheme from "./RepScheme.type";
import SetScheme from "./SetScheme.type";

interface Exercise {
  name: string;
  muscleGroup: string;
  setScheme: SetScheme;
  numOfSets: string;
  repScheme: RepScheme;
  numOfReps: string;
  note?: string;
}

export default Exercise;
