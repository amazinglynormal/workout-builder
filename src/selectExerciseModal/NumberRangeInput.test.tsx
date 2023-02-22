import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberRangeInput from "./NumberRangeInput";

const mockLowerChangeHandler = jest.fn();
const mockHigherChangeHandler = jest.fn();

describe("<NumberRangeInput>", () => {
  test("renders correctly in the DOM", () => {
    const { getByLabelText } = render(
      <NumberRangeInput
        lowerValueLabel="Test Lower Label"
        higherValueLabel="Test Higher Label"
        lowerValue={1}
        higherValue={2}
        setLowerValue={mockLowerChangeHandler}
        setHigherValue={mockHigherChangeHandler}
      />
    );

    const lowerRangeInput = getByLabelText("Test Lower Label");
    expect(lowerRangeInput).toBeInTheDocument();
    expect(lowerRangeInput).toHaveValue(1);

    const higherRangeInput = getByLabelText("Test Higher Label");
    expect(higherRangeInput).toBeInTheDocument();
    expect(higherRangeInput).toHaveValue(2);
  });

  test("calls changeHandler when user changes value", () => {
    const { getByLabelText } = render(
      <NumberRangeInput
        lowerValueLabel="Test Lower Label"
        higherValueLabel="Test Higher Label"
        lowerValue={1}
        higherValue={6}
        setLowerValue={mockLowerChangeHandler}
        setHigherValue={mockHigherChangeHandler}
      />
    );
    const higherRangeInput = getByLabelText("Test Higher Label");
    userEvent.type(higherRangeInput, "7");
    expect(mockHigherChangeHandler).toHaveBeenCalled();
  });

  test("focus on click", () => {
    const { getByLabelText } = render(
      <NumberRangeInput
        lowerValueLabel="Test Lower Label"
        higherValueLabel="Test Higher Label"
        lowerValue={1}
        higherValue={2}
        setLowerValue={mockLowerChangeHandler}
        setHigherValue={mockHigherChangeHandler}
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
