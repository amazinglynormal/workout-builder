import WorkoutProgram from "../interfacesAndTypes/WorkoutProgram.interface";
import VolumeCounterTableRow from "./VolumeCounterTableRow";

interface Props {
  workoutProgram: WorkoutProgram;
}

const VolumeCounterTable = ({ workoutProgram }: Props) => {
  const sortedMuscleGroups = Object.fromEntries(
    Object.entries(workoutProgram.volume).sort(([, a], [, b]) => b - a)
  );

  const tableRows = Object.keys(sortedMuscleGroups).map((muscleGroup) => {
    return (
      <VolumeCounterTableRow
        key={muscleGroup}
        exerciseName={muscleGroup}
        exerciseVolumeCount={workoutProgram.volume[muscleGroup]}
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
