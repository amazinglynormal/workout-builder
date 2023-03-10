import DayHeader from "./DayHeader";

import styles from "./DayBuilder.module.css";
import ExerciseDisplay from "./ExerciseDisplay";
import ExerciseLocation from "../interfacesAndTypes/ExerciseLocation.interface";
import {
  useWorkoutProgram,
  useWorkoutProgramDispatch,
} from "../context/WorkoutProgramContext";

interface Props {
  openModal: (exerciseLocation: ExerciseLocation) => void;
  day: number;
}

const DayBuilder = ({ openModal, day }: Props) => {
  const workoutProgram = useWorkoutProgram();
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
