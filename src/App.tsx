import { useState } from "react";
import ExerciseLocation from "./interfacesAndTypes/ExerciseLocation.interface";
import { useWorkoutProgram } from "./context/WorkoutProgramContext";
import PageLayout from "./pages/PageLayout";

interface Props {
  children: React.ReactNode;
}

function App({ children }: Props) {
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

  return <PageLayout>{children}</PageLayout>;
}

export default App;
