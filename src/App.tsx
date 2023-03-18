import { useEffect, useState } from "react";
import Header from "./components/Header";
import VolumeCounter from "./volumeCounter/VolumeCounter";
import WorkoutBuilder from "./workoutBuilder/WorkoutBuilder";
import SelectExerciseModal from "./selectExerciseModal/SelectExerciseModal";
import ExerciseLocation from "./interfacesAndTypes/ExerciseLocation.interface";
import {
  useWorkoutProgram,
  WorkoutProgramProvider,
} from "./context/WorkoutProgramContext";
import PDFViewerWrapper from "./pdf/PDFViewerWrapper";

function App() {
  const workoutProgram = useWorkoutProgram();
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
    <>
      {showModal && (
        <SelectExerciseModal
          closeModal={closeModal}
          exerciseLocation={exerciseLocation}
        />
      )}
      <Header />
      <WorkoutBuilder openModal={openModal} />
      <VolumeCounter />
      <PDFViewerWrapper workoutProgram={workoutProgram} />
    </>
  );
}

export default App;
