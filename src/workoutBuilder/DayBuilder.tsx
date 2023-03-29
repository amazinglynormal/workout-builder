import DayHeader from "./DayHeader";

import styles from "./DayBuilder.module.css";
import ExerciseDisplay from "./ExerciseDisplay";
import ExerciseLocation from "../interfacesAndTypes/ExerciseLocation.interface";
import { useWorkoutProgramDispatch } from "../context/WorkoutProgramContext";
import WorkoutProgram from "../interfacesAndTypes/WorkoutProgram.interface";

interface Props {
  openModal: (exerciseLocation: ExerciseLocation) => void;
  day: number;
  workoutProgram: WorkoutProgram;
}

const DayBuilder = ({ openModal, day, workoutProgram }: Props) => {
  const dispatch = useWorkoutProgramDispatch();

  return (
    <div className={styles.border}>
      <DayHeader
        title={workoutProgram.exerciseSelection[day].title}
        dispatch={dispatch}
        day={day}
      />
      <ExerciseDisplay
        exercises={workoutProgram.exerciseSelection[day].exercises}
        day={day}
        openModal={openModal}
        dispatch={dispatch}
      />
    </div>
  );
};

export default DayBuilder;
