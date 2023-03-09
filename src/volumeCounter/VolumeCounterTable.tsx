import { useWorkoutProgram } from "../context/WorkoutProgramContext";
import VolumeCounterTableRow from "./VolumeCounterTableRow";

const VolumeCounterTable = () => {
  const { volume } = useWorkoutProgram();
  const sortedMuscleGroups = Object.fromEntries(
    Object.entries(volume).sort(([, a], [, b]) => b - a)
  );

  const tableRows = Object.keys(sortedMuscleGroups).map((muscleGroup) => {
    return (
      <VolumeCounterTableRow
        key={muscleGroup}
        exerciseName={muscleGroup}
        exerciseVolumeCount={volume[muscleGroup]}
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
