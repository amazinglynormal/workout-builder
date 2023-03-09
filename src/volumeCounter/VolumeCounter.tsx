import VolumeCounterTable from "./VolumeCounterTable";

const VolumeCounter = () => {
  return (
    <div>
      <h2>Volume Counter</h2>
      <p>
        Estimate of direct sets for each muscle group. Muscles targeted by an
        exercise will vary with an individuals technique.
      </p>
      <div>
        <VolumeCounterTable />
      </div>
    </div>
  );
};

export default VolumeCounter;
