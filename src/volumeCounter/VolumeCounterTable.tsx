import { useWorkoutProgram } from "../context/WorkoutProgramContext";
import WorkoutProgram from "../interfacesAndTypes/WorkoutProgram.interface";
import VolumeCounterTableRow from "./VolumeCounterTableRow";

interface Props {
  workoutProgram?: WorkoutProgram;
}

const VolumeCounterTable = ({ workoutProgram }: Props) => {
  const { volume } = useWorkoutProgram();

  let useVolume: {
    [muscleGroup: string]: number;
  };

  if (workoutProgram) {
    useVolume = workoutProgram.volume;
  } else {
    useVolume = volume;
  }

  const sortedMuscleGroups = Object.fromEntries(
    Object.entries(useVolume).sort(([, a], [, b]) => b - a)
  );

  const tableRows = Object.keys(sortedMuscleGroups).map((muscleGroup) => {
    return (
      <VolumeCounterTableRow
        key={muscleGroup}
        exerciseName={muscleGroup}
        exerciseVolumeCount={useVolume[muscleGroup]}
      />
    );
  });
  return (
    <table>
      <tbody>{tableRows}</tbody>
    </table>
  );
};

export default VolumeCounterTable;
