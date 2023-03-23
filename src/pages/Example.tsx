import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  useWorkoutProgram,
  useWorkoutProgramDispatch,
} from "../context/WorkoutProgramContext";
import ExerciseLocation from "../interfacesAndTypes/ExerciseLocation.interface";
import WorkoutProgram from "../interfacesAndTypes/WorkoutProgram.interface";
import PDFViewerWrapper from "../pdf/PDFViewerWrapper";
import SelectExerciseModal from "../selectExerciseModal/SelectExerciseModal";
import VolumeCounter from "../volumeCounter/VolumeCounter";
import WorkoutBuilder from "../workoutBuilder/WorkoutBuilder";

const beginner3xWeek: WorkoutProgram = {
  numOfDaysPerWeek: 3,
  numOfWeeks: 1,
  volume: {
    Abs: 0,
    "Back (Horizontal)": 3,
    "Back (Vertical)": 6,
    Biceps: 6,
    Calves: 3,
    Chest: 9,
    Delts: 9,
    Forearms: 0,
    Glutes: 0,
    Hamstrings: 6,
    Neck: 0,
    Quads: 9,
    Traps: 0,
    Triceps: 9,
  },
  exerciseSelection: [
    {
      title: "Day #1",
      exercises: [
        [
          {
            name: "Goblet Squat",
            muscleGroup: "Quads",
            setScheme: "Sets",
            numOfSets: "3",
            repScheme: "Rep Range",
            numOfReps: "8-10",
          },
        ],
        [
          {
            name: "Barbell Bench Press (Flat)",
            muscleGroup: "Chest",
            setScheme: "Sets",
            numOfSets: "3",
            repScheme: "Rep Range",
            numOfReps: "6-10",
          },
        ],
        [
          {
            name: "Lat Pulldown",
            muscleGroup: "Back (Vertical)",
            setScheme: "Sets",
            numOfSets: "3",
            repScheme: "Rep Range",
            numOfReps: "6-10",
          },
        ],
        [
          {
            name: "Lying Leg Curl",
            muscleGroup: "Hamstrings",
            setScheme: "Sets",
            numOfSets: "3",
            repScheme: "Rep Range",
            numOfReps: "8-12",
          },
        ],
        [
          {
            name: "Dumbbell Skullcrusher",
            muscleGroup: "Triceps",
            setScheme: "Sets",
            numOfSets: "3",
            repScheme: "Rep Range",
            numOfReps: "10-15",
          },
          {
            name: "EZ Bar Curl",
            muscleGroup: "Biceps",
            setScheme: "Sets",
            numOfSets: "3",
            repScheme: "Rep Range",
            numOfReps: "8-12",
          },
        ],
      ],
    },
    {
      title: "Day #2",
      exercises: [
        [
          {
            name: "Barbell Romanian Deadlift",
            muscleGroup: "Hamstrings",
            setScheme: "Sets",
            numOfSets: "3",
            repScheme: "Rep Range",
            numOfReps: "6-10",
          },
        ],
        [
          {
            name: "Dumbbell Overhead Press (Seated)",
            muscleGroup: "Delts",
            setScheme: "Sets",
            numOfSets: "3",
            repScheme: "Rep Range",
            numOfReps: "6-10",
          },
        ],
        [
          {
            name: "Barbell Bent-Over Row",
            muscleGroup: "Back (Horizontal)",
            setScheme: "Sets",
            numOfSets: "3",
            repScheme: "Rep Range",
            numOfReps: "6-10",
          },
        ],
        [
          {
            name: "Pec Deck Flye",
            muscleGroup: "Chest",
            setScheme: "Sets",
            numOfSets: "3",
            repScheme: "Rep Range",
            numOfReps: "10-15",
          },
        ],
        [
          {
            name: "Leg Extension",
            muscleGroup: "Quads",
            setScheme: "Sets",
            numOfSets: "3",
            repScheme: "Rep Range",
            numOfReps: "10-15",
          },
        ],
        [
          {
            name: "Cable Face Pull",
            muscleGroup: "Delts",
            setScheme: "Sets",
            numOfSets: "3",
            repScheme: "Rep Range",
            numOfReps: "10-15",
          },
          {
            name: "Cable Tricep Extension",
            muscleGroup: "Triceps",
            setScheme: "Sets",
            numOfSets: "3",
            repScheme: "Rep Range",
            numOfReps: "10-15",
          },
        ],
      ],
    },
    {
      title: "Day #3",
      exercises: [
        [
          {
            name: "Leg Press",
            muscleGroup: "Quads",
            setScheme: "Sets",
            numOfSets: "3",
            repScheme: "Rep Range",
            numOfReps: "6-10",
          },
        ],
        [
          {
            name: "Dumbbell Bench Press (Incline)",
            muscleGroup: "Chest",
            setScheme: "Sets",
            numOfSets: "3",
            repScheme: "Rep Range",
            numOfReps: "6-10",
          },
        ],
        [
          {
            name: "Assisted Pull Up",
            muscleGroup: "Back (Horizontal)",
            setScheme: "Sets",
            numOfSets: "3",
            repScheme: "Rep Range",
            numOfReps: "5-8",
            note: "Use any grip that is comfortable",
          },
        ],
        [
          {
            name: "Hip Thrust",
            muscleGroup: "Glutes",
            setScheme: "Sets",
            numOfSets: "3",
            repScheme: "Rep Range",
            numOfReps: "8-12",
          },
        ],

        [
          {
            name: "Cable Overhead Tricep Extension",
            muscleGroup: "Triceps",
            setScheme: "Sets",
            numOfSets: "3",
            repScheme: "Rep Range",
            numOfReps: "10-15",
            note: "Rope attachment is a good firat option to try",
          },
        ],
        [
          {
            name: "Calf Raises",
            muscleGroup: "Calves",
            setScheme: "Sets",
            numOfSets: "3",
            repScheme: "Rep Range",
            numOfReps: "8-12",
            note: "Use any variation available",
          },
        ],
      ],
    },
  ],
};

const examplePrograms: { [name: string]: WorkoutProgram } = {
  beginner3xweek: beginner3xWeek,
};

export default function Example() {
  const { exampleName } = useParams();
  const workoutProgram = useWorkoutProgram();
  const dispatch = useWorkoutProgramDispatch();

  if (exampleName) {
    dispatch({
      type: "SET_ENTIRE_PROGRAM",
      newProgram: examplePrograms[exampleName],
    });
  }

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
      <main>
        <WorkoutBuilder openModal={openModal} />
        <VolumeCounter />
        <PDFViewerWrapper workoutProgram={workoutProgram} />
      </main>
    </>
  );
}
