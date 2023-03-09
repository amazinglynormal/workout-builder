import { useState } from "react";
import Header from "./components/Header";
import VolumeCounter from "./volumeCounter/VolumeCounter";
import emptyWorkoutObject from "./utils/defaultWorkoutProgram";
import WorkoutBuilder from "./workoutBuilder/WorkoutBuilder";
import SelectExerciseModal from "./selectExerciseModal/SelectExerciseModal";
import ExerciseLocation from "./interfacesAndTypes/ExerciseLocation.interface";
import { WorkoutProgramProvider } from "./context/WorkoutProgramContext";

function App() {
  const [numOfWorkoutDays, setNumOfWorkoutDays] = useState(1);
  const [numOfWeeksToRunProgram, setNumOfWeeksToRunProgram] = useState(1);
  const [workoutProgram, setWorkoutProgram] = useState(emptyWorkoutObject);
  const [showModal, setShowModal] = useState(false);
  const [exerciseLocation, setExerciseLocation] = useState<ExerciseLocation>({
    day: 0,
    index: 0,
    subIndex: 0,
  });

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = (exerciseLocation: ExerciseLocation) => {
    setExerciseLocation(exerciseLocation);
    setShowModal(true);
  };

  return (
    <div>
      <WorkoutProgramProvider>
        {showModal && (
          <SelectExerciseModal
            closeModal={closeModal}
            exerciseLocation={exerciseLocation}
          />
        )}
        <Header />
        <WorkoutBuilder
          workoutProgram={workoutProgram}
          numOfWorkoutDays={numOfWorkoutDays}
          numOfWeeksToRunProgram={numOfWeeksToRunProgram}
          setNumOfWorkoutDays={setNumOfWorkoutDays}
          setNumOfWeeksToRunProgram={setNumOfWeeksToRunProgram}
          openModal={openModal}
        />
        <VolumeCounter />
      </WorkoutProgramProvider>
    </div>
  );
}

export default App;
