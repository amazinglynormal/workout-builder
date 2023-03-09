import { ChangeEvent } from "react";
import {
  useWorkoutProgram,
  useWorkoutProgramDispatch,
} from "../context/WorkoutProgramContext";

const DaysAndWeeksForm = () => {
  const { numOfDaysPerWeek, numOfWeeks } = useWorkoutProgram();
  const dispatch = useWorkoutProgramDispatch();

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const id = event.target.id;
    const newValue = Number(event.target.value);
    switch (id) {
      case "days":
        dispatch({
          type: "EDIT_NUM_OF_DAYS",
          newNumOfDays: newValue,
        });
        break;
      case "weeks":
        dispatch({ type: "EDIT_NUM_OF_WEEKS", newNumOfWeeks: newValue });
        break;
    }
  };
  return (
    <form>
      <div>
        <label htmlFor="days">
          How many days a week will you be working out?
        </label>
        <input
          id="days"
          name="days"
          type="number"
          min="1"
          max="7"
          value={numOfDaysPerWeek}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="weeks">How many weeks will you run the program?</label>
        <input
          id="weeks"
          name="weeks"
          type="number"
          min="1"
          max="52"
          value={numOfWeeks}
          onChange={onChangeHandler}
        />
      </div>
    </form>
  );
};

export default DaysAndWeeksForm;
