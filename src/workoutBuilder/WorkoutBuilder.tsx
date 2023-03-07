import { Dispatch, SetStateAction } from "react";
import ExerciseLocation from "../interfacesAndTypes/ExerciseLocation.interface";
import WorkoutProgram from "../interfacesAndTypes/WorkoutProgram.interface";
import DayBuilder from "./DayBuilder";
import DaysAndWeeksForm from "./DaysAndWeeksForm";

interface Props {
  workoutProgram: WorkoutProgram;
  numOfWorkoutDays: number;
  numOfWeeksToRunProgram: number;
  setNumOfWorkoutDays: Dispatch<SetStateAction<number>>;
  setNumOfWeeksToRunProgram: Dispatch<SetStateAction<number>>;
  openModal: (exerciseLocation: ExerciseLocation) => void;
}

const WorkoutBuilder = ({
  workoutProgram,
  numOfWorkoutDays,
  numOfWeeksToRunProgram,
  setNumOfWorkoutDays,
  setNumOfWeeksToRunProgram,
  openModal,
}: Props) => {
  return (
    <div>
      <DaysAndWeeksForm
        days={numOfWorkoutDays}
        weeks={numOfWeeksToRunProgram}
        setNumOfWorkoutDays={setNumOfWorkoutDays}
        setNumOfWeeksToRunProgram={setNumOfWeeksToRunProgram}
      />
      <DayBuilder
        day={0}
        workoutProgram={workoutProgram}
        openModal={openModal}
      />
    </div>
  );
};

export default WorkoutBuilder;
