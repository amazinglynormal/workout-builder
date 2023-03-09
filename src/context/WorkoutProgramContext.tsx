import { createContext, useContext } from "react";
import WorkoutProgram from "../interfacesAndTypes/WorkoutProgram.interface";
import defaultWorkoutProgram from "../utils/defaultWorkoutProgram";
import Action from "./workoutProgramReducerAction.type";
import { useImmerReducer } from "use-immer";
import recalculateVolume from "../utils/recalculateVolume";

const WorkoutProgramContext = createContext(defaultWorkoutProgram);
const WorkoutProgramDispatchContext =
  createContext<React.Dispatch<Action> | null>(null);

function workoutProgramReducer(draft: WorkoutProgram, action: Action) {
  switch (action.type) {
    case "EDIT_TITLE": {
      draft.exerciseSelection[action.day].title = action.newTitle;
      break;
    }
    case "EDIT_NUM_OF_DAYS": {
      const currNumOfDays = draft.numOfDaysPerWeek;
      draft.numOfDaysPerWeek = action.newNumOfDays;
      if (draft.numOfDaysPerWeek > draft.exerciseSelection.length) {
        const diff = draft.numOfDaysPerWeek - draft.exerciseSelection.length;
        let dayNum = currNumOfDays + 1;
        for (let i = 0; i < diff; i++) {
          draft.exerciseSelection.push({
            title: `Day #${dayNum}`,
            exercises: [],
          });
          dayNum++;
        }
      } else if (draft.exerciseSelection.length > draft.numOfDaysPerWeek) {
        const newExerciseSelection = [];
        for (let i = 0; i < draft.numOfDaysPerWeek; i++) {
          newExerciseSelection.push(draft.exerciseSelection[i]);
        }
      }
      break;
    }
    case "EDIT_NUM_OF_WEEKS": {
      draft.numOfWeeks = action.newNumOfWeeks;
      break;
    }
    case "ADD_EXERCISE":
    case "EDIT_EXERCISE": {
      const day = action.exerciseLocation.day;
      const index = action.exerciseLocation.index;
      const subIndex = action.exerciseLocation.subIndex;

      draft.exerciseSelection[day].exercises[index][subIndex] =
        action.newExerciseInfo;

      recalculateVolume(draft);
      break;
    }
    case "DELETE_EXERCISE": {
      const day = action.exerciseLocation.day;
      const index = action.exerciseLocation.index;
      const subIndex = action.exerciseLocation.subIndex;

      draft.exerciseSelection[day].exercises[index].splice(subIndex, 1);

      recalculateVolume(draft);
      break;
    }
  }
}

interface Props {
  children: React.ReactNode;
}

export function WorkoutProgramProvider({ children }: Props) {
  const [workoutProgram, dispatch] = useImmerReducer(
    workoutProgramReducer,
    defaultWorkoutProgram
  );

  return (
    <WorkoutProgramContext.Provider value={workoutProgram}>
      <WorkoutProgramDispatchContext.Provider value={dispatch}>
        {children}
      </WorkoutProgramDispatchContext.Provider>
    </WorkoutProgramContext.Provider>
  );
}

export function useWorkoutProgram() {
  return useContext(WorkoutProgramContext);
}

export function useWorkoutProgramDispatch() {
  return useContext(WorkoutProgramDispatchContext);
}
