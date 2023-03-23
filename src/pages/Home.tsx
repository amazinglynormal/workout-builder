import { useState } from "react";
import HomeHeader from "../components/HomeHeader";
import { useWorkoutProgram } from "../context/WorkoutProgramContext";
import ExerciseLocation from "../interfacesAndTypes/ExerciseLocation.interface";
import PDFViewerWrapper from "../pdf/PDFViewerWrapper";
import SelectExerciseModal from "../selectExerciseModal/SelectExerciseModal";
import VolumeCounter from "../volumeCounter/VolumeCounter";
import WorkoutBuilder from "../workoutBuilder/WorkoutBuilder";

export default function Home() {
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
      <HomeHeader />
      <main>
        <WorkoutBuilder openModal={openModal} />
        <VolumeCounter />
        <PDFViewerWrapper workoutProgram={workoutProgram} />
      </main>
    </>
  );
}
