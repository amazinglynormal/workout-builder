import { Dispatch, SetStateAction } from "react";
import Workout from "../interfacesAndTypes/Workout.interface";
import DaysAndWeeksForm from "./DaysAndWeeksForm";

interface Props {
  workoutInfo: Workout;
  numOfWorkoutDays: number;
  numOfWeeksToRunProgram: number;
  setNumOfWorkoutDays: Dispatch<SetStateAction<number>>;
  setNumOfWeeksToRunProgram: Dispatch<SetStateAction<number>>;
}

const WorkoutBuilder = ({
  workoutInfo,
  numOfWorkoutDays,
  numOfWeeksToRunProgram,
  setNumOfWorkoutDays,
  setNumOfWeeksToRunProgram,
}: Props) => {
  return (
    <div>
      <DaysAndWeeksForm
        days={numOfWorkoutDays}
        weeks={numOfWeeksToRunProgram}
        setNumOfWorkoutDays={setNumOfWorkoutDays}
        setNumOfWeeksToRunProgram={setNumOfWeeksToRunProgram}
      />
    </div>
  );
};

export default WorkoutBuilder;
