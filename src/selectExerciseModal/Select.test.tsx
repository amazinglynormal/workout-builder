import { render } from "@testing-library/react";
import Select from "./Select";
import userEvent from "@testing-library/user-event";

const testOptionsOne = ["option 1", "option 2", "option 3", "option 4"];

const testOptionsTwo: { [name: string]: string[] } = {
  optionGroup1: ["option 1", "option 2", "option 3"],
  optionGroup2: ["option 4", "option 5", "option 6"],
};

const mockReducerDispatch = jest.fn();

describe("<Select>", () => {
  test("renders correctly in the DOM with options array", () => {
    const { getByRole } = render(
      <Select
        id="test-id"
        label="Test Label"
        options={testOptionsOne}
        selected={testOptionsOne[0]}
        reducerDispatch={mockReducerDispatch}
      />
    );

    const selectInput = getByRole("combobox");
    expect(selectInput).toBeInTheDocument();
    expect(selectInput).toHaveValue("option 1");
  });

  test("renders correctly in the DOM with options object", () => {
    const { getByRole, getAllByRole } = render(
      <Select
        id="test-id"
        label="Test Label"
        options={testOptionsTwo}
        selected={testOptionsTwo.optionGroup2[0]}
        reducerDispatch={mockReducerDispatch}
      />
    );

    const selectInput = getByRole("combobox");
    expect(selectInput).toBeInTheDocument();
    expect(selectInput).toHaveValue("option 4");

    const groups = getAllByRole("group");
    expect(groups.length).toBe(2);
  });

  test("calls onChange when user selects option", async () => {
    const { getByRole } = render(
      <Select
        id="exercise-select"
        label="Test Label"
        options={testOptionsOne}
        selected={testOptionsOne[0]}
        reducerDispatch={mockReducerDispatch}
      />
    );

    userEvent.selectOptions(getByRole("combobox"), ["option 2"]);
    expect(mockReducerDispatch).toHaveBeenCalledWith({
      type: "UPDATE_NAME",
      newInfo: "option 2",
    });

    userEvent.selectOptions(getByRole("combobox"), ["option 1"]);
    expect(mockReducerDispatch).toHaveBeenCalledTimes(2);
  });
});
