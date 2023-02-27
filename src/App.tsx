import { useState } from "react";
import Header from "./components/Header";
import VolumeCounter from "./volumeCounter/VolumeCounter";
import emptyWorkoutObject from "./utils/emptyWorkoutObject";
import WorkoutBuilder from "./workoutBuilder/WorkoutBuilder";
import SelectExerciseModal from "./selectExerciseModal/SelectExerciseModal";

function App() {
  const [numOfWorkoutDays, setNumOfWorkoutDays] = useState(1);
  const [numOfWeeksToRunProgram, setNumOfWeeksToRunProgram] = useState(1);
  const [workoutInfo, setWorkoutInfo] = useState(emptyWorkoutObject);
  return (
    <div>
      <Header />
      <WorkoutBuilder
        workoutInfo={workoutInfo}
        numOfWorkoutDays={numOfWorkoutDays}
        numOfWeeksToRunProgram={numOfWeeksToRunProgram}
        setNumOfWorkoutDays={setNumOfWorkoutDays}
        setNumOfWeeksToRunProgram={setNumOfWeeksToRunProgram}
      />
      <VolumeCounter workoutInfo={workoutInfo} />
      <SelectExerciseModal />
    </div>
  );
}

export default App;
