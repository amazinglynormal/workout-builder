import { useState } from "react";
import ExerciseLocation from "./interfacesAndTypes/ExerciseLocation.interface";
import { useWorkoutProgram } from "./context/WorkoutProgramContext";
import PageLayout from "./pages/PageLayout";
import Home from "./pages/Home";

function App() {
  return (
    <PageLayout>
      <Home />
    </PageLayout>
  );
}

export default App;
