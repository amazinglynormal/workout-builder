import { useParams } from "react-router-dom";
import WorkoutProgram from "../interfacesAndTypes/WorkoutProgram.interface";
import PDFViewerWrapper from "../pdf/PDFViewerWrapper";
import VolumeCounter from "../volumeCounter/VolumeCounter";
import PageLayout from "./PageLayout";

import defaultWorkoutProgram from "../utils/defaultWorkoutProgram";
import beginner3xWeek, {
  beginner3xWeekIntroCopy,
} from "../utils/beginner3xWeekProgram";
import ExampleIntro from "../components/ExampleIntro";
import beginner4xWeek, {
  beginner4xWeekIntroCopy,
} from "../utils/beginner4xWeekProgram";

let introCopy: {
  header: string;
  description: string;
  advice: string;
} = {
  header: "You shouldn't be seeing this!!",
  description:
    "If you are reading this it means something has gone horribly wrong!!",
  advice: "I recommend returning to the home page and trying again.",
};

export default function Example() {
  const { exampleName } = useParams();

  let workoutProgram: WorkoutProgram;

  switch (exampleName) {
    case "beginner3xweek":
      workoutProgram = beginner3xWeek;
      introCopy = beginner3xWeekIntroCopy;
      break;
    case "beginner4xweek":
      workoutProgram = beginner4xWeek;
      introCopy = beginner4xWeekIntroCopy;
      break;
    default:
      workoutProgram = defaultWorkoutProgram;
  }

  return (
    <PageLayout>
      <ExampleIntro introCopy={introCopy} />
      <main>
        <PDFViewerWrapper workoutProgram={workoutProgram} />
        <VolumeCounter workoutProgram={workoutProgram} />
      </main>
    </PageLayout>
  );
}
