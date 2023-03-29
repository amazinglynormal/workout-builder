import { useWorkoutProgram } from "../context/WorkoutProgramContext";
import ExerciseLocation from "../interfacesAndTypes/ExerciseLocation.interface";
import WorkoutProgram from "../interfacesAndTypes/WorkoutProgram.interface";
import DayBuilder from "./DayBuilder";
import DaysAndWeeksForm from "./DaysAndWeeksForm";

interface Props {
  openModal: (exerciseLocation: ExerciseLocation) => void;
}

const WorkoutBuilder = ({ openModal }: Props) => {
  const workoutProgram = useWorkoutProgram();

  const days = [];
  for (let i = 0; i < workoutProgram.numOfDaysPerWeek; i++) {
    days.push(
      <DayBuilder
        key={i}
        day={i}
        openModal={openModal}
        workoutProgram={workoutProgram}
      />
    );
  }

  return (
    <div>
      <DaysAndWeeksForm />
      {days}
    </div>
  );
};

export default WorkoutBuilder;
