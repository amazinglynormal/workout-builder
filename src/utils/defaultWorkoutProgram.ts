import WorkoutProgram from "../interfacesAndTypes/WorkoutProgram.interface";

const defaultWorkoutProgram: WorkoutProgram = {
  numOfDaysPerWeek: 1,
  volume: {
    Abs: 0,
    "Back (Horizontal)": 0,
    "Back (Vertical)": 0,
    Biceps: 0,
    Calves: 0,
    Chest: 0,
    Delts: 0,
    Forearms: 0,
    Glutes: 0,
    Hamstrings: 0,
    Neck: 0,
    Quads: 0,
    Traps: 0,
    Triceps: 0,
  },
  exerciseSelection: [
    {
      title: "Day #1",
      exercises: [],
    },
  ],
};

export default defaultWorkoutProgram;
