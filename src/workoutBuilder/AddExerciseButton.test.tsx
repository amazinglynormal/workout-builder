import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddExerciseButton from "./AddExerciseButton";

const mockOpenModal = jest.fn();
const mockExerciseLocation = { day: 0, index: 0, subIndex: 0 };

describe("<AddExerciseButton>", () => {
  test("renders correctly in the DOM", () => {
    const { getByRole } = render(
      <AddExerciseButton
        text="exercise"
        openModal={mockOpenModal}
        exerciseLocation={mockExerciseLocation}
      />
    );

    const button = getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Add exercise");
  });

  test("calls supplied click handler when user clicks button", () => {
    const { getByRole } = render(
      <AddExerciseButton
        text="exercise"
        openModal={mockOpenModal}
        exerciseLocation={mockExerciseLocation}
      />
    );
    const button = getByRole("button");
    userEvent.click(button);
    expect(mockOpenModal).toHaveBeenCalled();
    expect(mockOpenModal).toHaveBeenCalledWith(mockExerciseLocation);
  });
});
