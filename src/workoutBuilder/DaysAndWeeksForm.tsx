import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface Props {
  days: number;
  weeks: number;
  setNumOfWorkoutDays: Dispatch<SetStateAction<number>>;
  setNumOfWeeksToRunProgram: Dispatch<SetStateAction<number>>;
}

const DaysAndWeeksForm = ({
  days,
  weeks,
  setNumOfWorkoutDays,
  setNumOfWeeksToRunProgram,
}: Props) => {
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const id = event.target.id;
    const newValue = Number(event.target.value);
    switch (id) {
      case "days":
        setNumOfWorkoutDays(newValue);
        break;
      case "weeks":
        setNumOfWeeksToRunProgram(newValue);
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
          value={days}
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
          value={weeks}
          onChange={onChangeHandler}
        />
      </div>
    </form>
  );
};

export default DaysAndWeeksForm;
