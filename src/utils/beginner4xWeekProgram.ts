import WorkoutProgram from "../interfacesAndTypes/WorkoutProgram.interface";

const beginner4xWeek: WorkoutProgram = {
  numOfDaysPerWeek: 4,
  volume: {
    Abs: 6,
    "Back (Horizontal)": 3,
    "Back (Vertical)": 6,
    Biceps: 6,
    Calves: 6,
    Chest: 9,
    Delts: 9,
    Forearms: 0,
    Glutes: 5,
    Hamstrings: 6,
    Neck: 0,
    Quads: 9,
    Traps: 2,
    Triceps: 9,
  },
  exerciseSelection: [
    {
      title: "Upper A",
      exercises: [
        [
          {
            name: "Assisted Pullups",
            muscleGroup: "Back (Vertical)",
            setScheme: "Sets",
            numOfSets: "3",
            repScheme: "Rep Range",
            numOfReps: "5-8",
            note: "Neutral, normal, underhand grips are ok. Whichever you prefer.",
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
            name: "Incline Dumbbell Row",
            muscleGroup: "Back (Horizontal)",
            setScheme: "Sets",
            numOfSets: "3",
            repScheme: "Rep Range",
            numOfReps: "6-12",
          },
        ],
        [
          {
            name: "Dumbbell Overhead Press (Seated)",
            muscleGroup: "Delts",
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
            numOfSets: "2",
            repScheme: "Rep Range",
            numOfReps: "10-15",
          },
          {
            name: "Hammer Curl",
            muscleGroup: "Biceps",
            setScheme: "Sets",
            numOfSets: "2",
            repScheme: "Rep Range",
            numOfReps: "10-15",
          },
        ],
        [
          {
            name: "Dumbbell Lateral Raise",
            muscleGroup: "Delts",
            setScheme: "Sets",
            numOfSets: "3",
            repScheme: "Rep Range",
            numOfReps: "10-15",
          },
        ],
      ],
    },
    {
      title: "Lower A",
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
            name: "Seated Leg Curl",
            muscleGroup: "Hamstrings",
            setScheme: "Sets",
            numOfSets: "3",
            repScheme: "Rep Range",
            numOfReps: "8-12",
          },
        ],
        [
          {
            name: "Dumbbell Walking Lunge",
            muscleGroup: "Glutes",
            setScheme: "Sets",
            numOfSets: "2",
            repScheme: "Rep Range",
            numOfReps: "10-15",
            note: "10-15 for each leg",
          },
        ],
        [
          {
            name: "Calf Raises",
            muscleGroup: "Calves",
            setScheme: "Sets",
            numOfSets: "3",
            repScheme: "Rep Range",
            numOfReps: "10-15",
            note: "Any variation you prefer i.e seated, standing , donkey.",
          },
        ],
        [
          {
            name: "Crunches",
            muscleGroup: "Abs",
            setScheme: "Sets",
            numOfSets: "3",
            repScheme: "Rep Range",
            numOfReps: "10-15",
          },
        ],
      ],
    },
    {
      title: "Upper B",
      exercises: [
        [
          {
            name: "Dumbbell Bench Press (Incline)",
            muscleGroup: "Chest",
            setScheme: "Sets",
            numOfSets: "3",
            repScheme: "Rep Range",
            numOfReps: "8-12",
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
            name: "Assisted Dips (Chest)",
            muscleGroup: "Chest",
            setScheme: "Sets",
            numOfSets: "2",
            repScheme: "Rep Range",
            numOfReps: "8-12",
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
            name: "Cable Tricep Extension",
            muscleGroup: "Triceps",
            setScheme: "Sets",
            numOfSets: "2",
            repScheme: "Rep Range",
            numOfReps: "10-15",
            note: "Rope attachment is a good first option to try",
          },
        ],
        [
          {
            name: "EZ Bar Curl",
            muscleGroup: "Biceps",
            setScheme: "Sets",
            numOfSets: "2",
            repScheme: "Rep Range",
            numOfReps: "10-15",
          },
        ],
        [
          {
            name: "Dumbbell Lateral Raise",
            muscleGroup: "Delts",
            setScheme: "Sets",
            numOfSets: "3",
            repScheme: "Rep Range",
            numOfReps: "10-15",
          },
        ],
      ],
    },
    {
      title: "Lower B",
      exercises: [
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
            name: "Leg Press",
            muscleGroup: "Quads",
            setScheme: "Sets",
            numOfSets: "3",
            repScheme: "Rep Range",
            numOfReps: "8-12",
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
        [
          {
            name: "Dumbbell Shrugs",
            muscleGroup: "Traps",
            setScheme: "Sets",
            numOfSets: "2",
            repScheme: "Rep Range",
            numOfReps: "10-15",
          },
        ],
        [
          {
            name: "Hanging Leg Raises",
            muscleGroup: "Abs",
            setScheme: "Sets",
            numOfSets: "3",
            repScheme: "Rep Range",
            numOfReps: "6-10",
            note: "Use Lying Leg Raises or Hanging Knee Raises as easier alternatives",
          },
        ],
      ],
    },
  ],
};

const beginner4xWeekIntroCopy = {
  header: "Beginner 4x Week Program",
  description:
    "This beginner program is intended to introduce people to the movement patterns they will be regularly repeating during their time lifting e.g. Squats, Bench Press, Rows, Deadlifts. As beginners do not need massive amounts of volume to grow size and strength, the volumes are relatively low. Feel free to add some sets of an abdomial exercise to the end of a workout day if you wish.",
  advice:
    "Focus your efforts on correctly performing the exercises with good form with a lighter weight. After a couple of sessions, if you feel the movement becoming smoother, begin increasing the weight by 2.5kg/5lbs whenever you can hit the top range of the target reps with good form.",
};

export { beginner4xWeekIntroCopy };
export default beginner4xWeek;
