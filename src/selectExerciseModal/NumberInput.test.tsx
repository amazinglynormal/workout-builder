import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberInput from "./NumberInput";

const mockChangeHandler = jest.fn();

describe("<NumberInput>", () => {
  test("renders correctly in the DOM", () => {
    const { getByLabelText } = render(
      <NumberInput
        id="test-id"
        label="Test Label"
        value={1}
        changeHandler={mockChangeHandler}
      />
    );

    const input = getByLabelText("Test Label");
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(1);
  });

  test("calls changeHandler when user changes value", async () => {
    const { getByLabelText } = render(
      <NumberInput
        id="test-id"
        label="Test Label"
        value={1}
        changeHandler={mockChangeHandler}
      />
    );

    const input = getByLabelText("Test Label");
    await userEvent.type(input, "3");

    expect(mockChangeHandler).toHaveBeenCalled();
  });

  test("focus on click", () => {
    const { getByLabelText } = render(
      <NumberInput
        id="test-id"
        label="Test Label"
        value={1}
        changeHandler={mockChangeHandler}
      />
    );

    const input = getByLabelText("Test Label");
    userEvent.click(input);

    expect(input).toHaveFocus();
  });
});
