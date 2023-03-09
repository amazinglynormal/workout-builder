import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Exercise from "../interfacesAndTypes/Exercise.interface";
import NumberRangeInput from "./NumberRangeInput";

const mockreducerDispatch = jest.fn();

const exerciseA: Exercise = {
  name: "Squats",
  muscleGroup: "Quads",
  setScheme: "Set Range",
  numOfSets: "2-4",
  repScheme: "Rep Range",
  numOfReps: "5-7",
};

describe("<NumberRangeInput>", () => {
  test("renders correctly in the DOM", () => {
    const { getByLabelText } = render(
      <NumberRangeInput
        id="test"
        lowerValueLabel="Test Lower Label"
        higherValueLabel="Test Higher Label"
        lowerValue={1}
        higherValue={2}
        currentReps={exerciseA.numOfReps}
        currentSets={exerciseA.numOfSets}
        reducerDispatch={mockreducerDispatch}
      />
    );

    const lowerRangeInput = getByLabelText("Test Lower Label");
    expect(lowerRangeInput).toBeInTheDocument();
    expect(lowerRangeInput).toHaveValue(1);

    const higherRangeInput = getByLabelText("Test Higher Label");
    expect(higherRangeInput).toBeInTheDocument();
    expect(higherRangeInput).toHaveValue(2);
  });

  test("calls reducerDispatch with correct arguments when user changes value", () => {
    const { getByLabelText } = render(
      <NumberRangeInput
        id="reps"
        lowerValueLabel="Test Lower Label"
        higherValueLabel="Test Higher Label"
        lowerValue={Number(exerciseA.numOfReps.split("-")[0])}
        higherValue={Number(exerciseA.numOfReps.split("-")[1])}
        currentReps={exerciseA.numOfReps}
        currentSets={exerciseA.numOfSets}
        reducerDispatch={mockreducerDispatch}
      />
    );
    const higherRangeInput = getByLabelText("Test Higher Label");
    userEvent.type(higherRangeInput, "7");
    expect(mockreducerDispatch).toHaveBeenCalledWith({
      type: "UPDATE_REPS_NUM",
      newInfo: "5-77",
    });
  });

  test("focus on click", () => {
    const { getByLabelText } = render(
      <NumberRangeInput
        id="test"
        lowerValueLabel="Test Lower Label"
        higherValueLabel="Test Higher Label"
        lowerValue={1}
        higherValue={2}
        currentReps={exerciseA.numOfReps}
        currentSets={exerciseA.numOfSets}
        reducerDispatch={mockreducerDispatch}
      />
    );

    const lowerRangeInput = getByLabelText("Test Lower Label");
    userEvent.click(lowerRangeInput);
    expect(lowerRangeInput).toHaveFocus();

    const higherRangeInput = getByLabelText("Test Higher Label");
    userEvent.click(higherRangeInput);
    expect(higherRangeInput).toHaveFocus();
  });
});
