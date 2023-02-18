import { useState } from "react";
import Header from "./components/Header";
import VolumeCounter from "./volumeCounter/VolumeCounter";
import emptyWorkoutObject from "./utils/emptyWorkoutObject";

function App() {
  const [workoutInfo, setWorkoutInfo] = useState(emptyWorkoutObject);
  return (
    <div>
      <Header />
      <VolumeCounter workoutInfo={workoutInfo} />
    </div>
  );
}

export default App;
