import Workout from "../interfaces/Workout.interface";
import VolumeCounterTableRow from "./VolumeCounterTableRow";

interface Props {
  workoutInfo: Workout;
}

const VolumeCounterTable = ({ workoutInfo }: Props) => {
  const sortedMuscleGroups = Object.fromEntries(
    Object.entries(workoutInfo.volume).sort(([, a], [, b]) => b - a)
  );

  const tableRows = Object.keys(sortedMuscleGroups).map((muscleGroup) => {
    return (
      <VolumeCounterTableRow
        key={muscleGroup}
        exerciseName={muscleGroup}
        exerciseVolumeCount={workoutInfo.volume[muscleGroup]}
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
