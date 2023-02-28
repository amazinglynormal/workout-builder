import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddExerciseButton from "./AddExerciseButton";

const mockClickHandler = jest.fn();

describe("<AddExerciseButton>", () => {
  test("renders correctly in the DOM", () => {
    const { getByRole } = render(
      <AddExerciseButton text="exercise" onClickHandler={mockClickHandler} />
    );

    const button = getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Add exercise");
  });

  test("calls supplied click handler when user clicks button", () => {
    const { getByRole } = render(
      <AddExerciseButton text="exercise" onClickHandler={mockClickHandler} />
    );
    const button = getByRole("button");
    userEvent.click(button);
    expect(mockClickHandler).toHaveBeenCalled();
    expect(mockClickHandler).toHaveBeenCalledWith("exercise");
  });
});
