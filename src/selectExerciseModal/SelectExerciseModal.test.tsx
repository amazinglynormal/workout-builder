import { act, render } from "../test-utils/test-utils";
import userEvent from "@testing-library/user-event";
import SelectExerciseModal from "./SelectExerciseModal";

const mockCloseModal = jest.fn();

const mockExerciseLocation = {
  day: 0,
  index: 0,
  subIndex: 0,
};

describe("<SelectExerciseModal>", () => {
  test("renders correctly in the DOM", () => {
    const { getAllByRole } = render(
      <SelectExerciseModal
        closeModal={mockCloseModal}
        exerciseLocation={mockExerciseLocation}
      />
    );

    const checkboxes = getAllByRole("checkbox");
    expect(checkboxes.length).toBe(2);
    expect(checkboxes[0]).toBeChecked();

    const selects = getAllByRole("combobox");
    expect(selects.length).toBe(5);
    expect(selects[2]).toBeDisabled();

    const buttons = getAllByRole("button");
    expect(buttons.length).toBe(3);
    expect(buttons[1]).toHaveTextContent("Add exercise");
    expect(buttons[2]).toHaveTextContent("Cancel");
  });

  test("disables exercise select and un-disables custom exercise input on checkbox click", () => {
    const { getAllByRole } = render(
      <SelectExerciseModal
        closeModal={mockCloseModal}
        exerciseLocation={mockExerciseLocation}
      />
    );

    let checkboxes = getAllByRole("checkbox");
    expect(checkboxes.length).toBe(2);
    expect(checkboxes[0]).toBeChecked();

    let selects = getAllByRole("combobox");
    expect(selects[0]).not.toBeDisabled();
    expect(selects[1]).not.toBeDisabled();
    expect(selects[2]).toBeDisabled();

    act(() => userEvent.click(checkboxes[1]));

    expect(checkboxes[0]).not.toBeChecked();
    expect(checkboxes[1]).toBeChecked();

    expect(selects[0]).toBeDisabled();
    expect(selects[1]).toBeDisabled();
    expect(selects[2]).not.toBeDisabled();
  });
});
