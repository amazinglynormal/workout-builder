import WorkoutProgram from "../interfacesAndTypes/WorkoutProgram.interface";

const beginner3xWeek: WorkoutProgram = {
  numOfDaysPerWeek: 3,
  volume: {
    Abs: 0,
    "Back (Horizontal)": 3,
    "Back (Vertical)": 6,
    Biceps: 3,
    Calves: 3,
    Chest: 6,
    Delts: 9,
    Forearms: 0,
    Glutes: 3,
    Hamstrings: 6,
    Neck: 0,
    Quads: 9,
    Traps: 0,
    Triceps: 6,
  },
  exerciseSelection: [
    {
      title: "Day #1",
      exercises: [
        [
          {
            name: "Back Squat (High Bar)",
            muscleGroup: "Quads",
            setScheme: "Sets",
            numOfSets: "3",
            repScheme: "Rep Range",
            numOfReps: "4-8",
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
            muscleGroup: "Back (Vertical)",
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
            name: "Dumbbell Lateral Raises",
            muscleGroup: "Delts",
            setScheme: "Sets",
            numOfSets: "3",
            repScheme: "Rep Range",
            numOfReps: "10-15",
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

const beginner3xWeekIntroCopy = {
  header: "Beginner 3x Week Program",
  description:
    "This beginner program is intended to introduce people to the movement patterns they will be regularly repeating during their time lifting e.g. Squats, Bench Press, Rows, Deadlifts. As beginners do not need massive amounts of volume to grow size and strength, the volumes are relatively low. Feel free to add some sets of an abdomial exercise to the end of a workout day if you wish.",
  advice:
    "Focus your efforts on correctly performing the exercises with good form with a lighter weight. After a couple of sessions, if you feel the movement becoming smoother, begin increasing the weight by 2.5kg/5lbs whenever you can hit the top range of the target reps with good form.",
};

export { beginner3xWeekIntroCopy };
export default beginner3xWeek;
