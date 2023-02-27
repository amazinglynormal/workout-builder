import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddCustomExercise from "./AddCustomExercise";

const testOptions = ["option 1", "option 2", "option 3"];

const mockSetSelectedMuscleGroup = jest.fn();
const mockSetCustomExercise = jest.fn();

describe("<AddCustomExercise>", () => {
  test("renders correctly in the DOM when not disabled", () => {
    const { getByRole, getByLabelText } = render(
      <AddCustomExercise
        muscleGroupOptions={testOptions}
        isDisabled={false}
        customExercise={""}
        selectedMuscleGroup={testOptions[0]}
        setSelectedMuscleGroup={mockSetSelectedMuscleGroup}
        setCustomExercise={mockSetCustomExercise}
      />
    );

    const customExerciseInput = getByLabelText("Add custom exercise");
    expect(customExerciseInput).toBeInTheDocument();
    expect(customExerciseInput).toHaveValue("");
    expect(customExerciseInput).toHaveAttribute(
      "placeholder",
      "e.g Super Magic Ab Crunch"
    );
    expect(customExerciseInput).not.toBeDisabled();

    const muscleGroupSelect = getByRole("combobox");
    expect(muscleGroupSelect).toBeInTheDocument();
    expect(muscleGroupSelect).toHaveValue("option 1");
  });

  test("renders correctly in the DOM when disabled", () => {
    const { getByRole, getByLabelText } = render(
      <AddCustomExercise
        muscleGroupOptions={testOptions}
        isDisabled={true}
        customExercise={""}
        selectedMuscleGroup={testOptions[0]}
        setSelectedMuscleGroup={mockSetSelectedMuscleGroup}
        setCustomExercise={mockSetCustomExercise}
      />
    );

    const customExerciseInput = getByLabelText("Add custom exercise");
    expect(customExerciseInput).toBeInTheDocument();
    expect(customExerciseInput).toHaveValue("");
    expect(customExerciseInput).toHaveAttribute(
      "placeholder",
      "e.g Super Magic Ab Crunch"
    );
    expect(customExerciseInput).toBeDisabled();

    const muscleGroupSelect = getByRole("combobox");
    expect(muscleGroupSelect).toBeInTheDocument();
    expect(muscleGroupSelect).toHaveValue("option 1");
    expect(muscleGroupSelect).toBeDisabled();
  });

  test("input displays exercise name if passed as prop", () => {
    const { getByLabelText } = render(
      <AddCustomExercise
        muscleGroupOptions={testOptions}
        isDisabled={false}
        customExercise={"Test exercise"}
        selectedMuscleGroup={testOptions[0]}
        setSelectedMuscleGroup={mockSetSelectedMuscleGroup}
        setCustomExercise={mockSetCustomExercise}
      />
    );

    const customExerciseInput = getByLabelText("Add custom exercise");
    expect(customExerciseInput).toHaveValue("Test exercise");
    expect(customExerciseInput).not.toBeDisabled();
  });

  test("setCustomExercise is called text input changes", () => {
    const { getByLabelText } = render(
      <AddCustomExercise
        muscleGroupOptions={testOptions}
        isDisabled={false}
        customExercise={""}
        selectedMuscleGroup={testOptions[0]}
        setSelectedMuscleGroup={mockSetSelectedMuscleGroup}
        setCustomExercise={mockSetCustomExercise}
      />
    );

    const customExerciseInput = getByLabelText("Add custom exercise");
    expect(customExerciseInput).toHaveValue("");
    userEvent.type(customExerciseInput, "custom input");
    expect(mockSetCustomExercise).toHaveBeenCalled();
  });
});
