import { act, render } from "../test-utils/test-utils";
import userEvent from "@testing-library/user-event";
import SetsAndRepsModifier from "./SetsAndRepsModifier";
import Exercise from "../interfacesAndTypes/Exercise.interface";

const mockReducerDispatch = jest.fn();

const exerciseA: Exercise = {
  name: "Squats",
  muscleGroup: "Quads",
  setScheme: "Sets",
  numOfSets: "2",
  repScheme: "Reps",
  numOfReps: "5",
};
const exerciseB: Exercise = {
  name: "Deadlift",
  muscleGroup: "Hamstrings",
  setScheme: "Set Range",
  numOfSets: "2-4",
  repScheme: "Rep Range",
  numOfReps: "5-7",
};

describe("<SetsAndRepsModifier>", () => {
  test("correctly renders in the DOM", () => {
    const { getAllByRole } = render(
      <SetsAndRepsModifier
        reducerDispatch={mockReducerDispatch}
        exercise={exerciseA}
      />
    );

    const selects = getAllByRole("combobox");
    expect(selects.length).toBe(2);

    const numberInputs = getAllByRole("spinbutton");
    expect(numberInputs.length).toBe(2);
  });

  test("call reducerDispatch with correct arguments when 'Set Range' option is selected", () => {
    const { getAllByRole } = render(
      <SetsAndRepsModifier
        reducerDispatch={mockReducerDispatch}
        exercise={exerciseA}
      />
    );

    const selects = getAllByRole("combobox");
    userEvent.selectOptions(selects[0], "Set Range");

    expect(mockReducerDispatch).toHaveBeenCalledWith({
      type: "UPDATE_SET_SCHEME",
      newInfo: "Set Range",
    });
  });

  test("call reducerDispatch with correct arguments when 'Rep Range' option is selected", () => {
    const { getAllByRole } = render(
      <SetsAndRepsModifier
        reducerDispatch={mockReducerDispatch}
        exercise={exerciseA}
      />
    );

    const selects = getAllByRole("combobox");
    userEvent.selectOptions(selects[1], "Rep Range");

    expect(mockReducerDispatch).toHaveBeenCalledWith({
      type: "UPDATE_REP_SCHEME",
      newInfo: "Rep Range",
    });
  });

  test("call reducerDispatch with correct arguments when 'Sets' option is selected", () => {
    const { getAllByRole } = render(
      <SetsAndRepsModifier
        reducerDispatch={mockReducerDispatch}
        exercise={exerciseB}
      />
    );

    const selects = getAllByRole("combobox");
    userEvent.selectOptions(selects[0], ["Sets"]);

    expect(mockReducerDispatch).toHaveBeenCalledWith({
      type: "UPDATE_SET_SCHEME",
      newInfo: "Sets",
    });
  });

  test("call reducerDispatch with correct arguments when 'Rep Goal' option is selected", () => {
    const { getAllByRole } = render(
      <SetsAndRepsModifier
        reducerDispatch={mockReducerDispatch}
        exercise={exerciseB}
      />
    );

    const selects = getAllByRole("combobox");
    userEvent.selectOptions(selects[1], ["Rep Goal"]);

    expect(mockReducerDispatch).toHaveBeenCalledWith({
      type: "UPDATE_REP_SCHEME",
      newInfo: "Rep Goal",
    });
  });

  test("renders with range input when 'Rep Range' option is selected", () => {
    const { getAllByRole } = render(
      <SetsAndRepsModifier
        reducerDispatch={mockReducerDispatch}
        exercise={exerciseB}
      />
    );

    let numberInputs = getAllByRole("spinbutton");
    expect(numberInputs.length).toBe(4);
  });

  test("renders with range input when 'Set Range' option is selected", () => {
    const { getAllByRole } = render(
      <SetsAndRepsModifier
        reducerDispatch={mockReducerDispatch}
        exercise={exerciseB}
      />
    );

    let numberInputs = getAllByRole("spinbutton");
    expect(numberInputs.length).toBe(4);
  });
});
