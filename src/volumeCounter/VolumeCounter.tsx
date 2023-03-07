import Workout from "../interfacesAndTypes/WorkoutProgram.interface";
import VolumeCounterTable from "./VolumeCounterTable";

interface Props {
  workoutProgram: Workout;
}

const VolumeCounter = ({ workoutProgram }: Props) => {
  return (
    <div>
      <h2>Volume Counter</h2>
      <p>
        Estimate of direct sets for each muscle group. Muscles targeted by an
        exercise will vary with an individuals technique.
      </p>
      <div>
        <VolumeCounterTable workoutProgram={workoutProgram} />
      </div>
    </div>
  );
};

export default VolumeCounter;
