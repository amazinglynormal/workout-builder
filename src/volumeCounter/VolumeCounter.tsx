import Workout from "../interfaces/Workout.interface";
import VolumeCounterTable from "./VolumeCounterTable";

interface Props {
  workoutInfo: Workout;
}

const VolumeCounter = ({ workoutInfo }: Props) => {
  return (
    <div>
      <h2>Volume Counter</h2>
      <p>
        Estimate of direct sets for each muscle group. Muscles targeted by an
        exercise will vary with an individuals technique.
      </p>
      <div>
        <VolumeCounterTable workoutInfo={workoutInfo} />
      </div>
    </div>
  );
};

export default VolumeCounter;
