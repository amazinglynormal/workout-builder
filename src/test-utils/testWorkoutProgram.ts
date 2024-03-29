import WorkoutProgram from "../interfacesAndTypes/WorkoutProgram.interface";
import testExerciseList from "./testExerciseList";

const testWorkoutProgram: WorkoutProgram = {
  numOfDaysPerWeek: 1,
  numOfWeeks: 1,
  volume: {
    Abs: 6,
    "Back (Horizontal)": 6,
    "Back (Vertical)": 6,
    Biceps: 3,
    Calves: 8,
    Chest: 9,
    Delts: 8,
    Forearms: 6,
    Glutes: 3,
    Hamstrings: 6,
    Neck: 0,
    Quads: 9,
    Traps: 0,
    Triceps: 9,
  },
  exerciseSelection: [
    {
      title: "Test Day #1",
      exercises: testExerciseList,
    },
  ],
};

export default testWorkoutProgram;
