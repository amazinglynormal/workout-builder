import { render } from "@testing-library/react";
import DaysAndWeeksForm from "./DaysAndWeeksForm";
import userEvent from "@testing-library/user-event";

describe("<DaysAndWeeksForm>", () => {
  test("renders correctly in the DOM", () => {
    const { getAllByRole, getByLabelText } = render(<DaysAndWeeksForm />);

    const inputs = getAllByRole("spinbutton");
    expect(inputs).toHaveLength(2);

    const daysInput = getByLabelText(
      "How many days a week will you be working out?"
    );
    expect(daysInput).toHaveValue(1);
    expect(daysInput).toHaveAttribute("type", "number");
    expect(daysInput).toHaveAttribute("min", "1");
    expect(daysInput).toHaveAttribute("max", "7");

    const weeksInput = getByLabelText(
      "How many weeks will you run the program?"
    );
    expect(weeksInput).toHaveValue(1);
    expect(weeksInput).toHaveAttribute("type", "number");
    expect(weeksInput).toHaveAttribute("min", "1");
    expect(weeksInput).toHaveAttribute("max", "52");
  });

  test("focus on click", () => {
    const { getAllByRole } = render(<DaysAndWeeksForm />);

    const inputs = getAllByRole("spinbutton");
    const daysInput = inputs[0];
    const weeksInput = inputs[1];

    userEvent.click(daysInput);
    expect(daysInput).toHaveFocus();

    userEvent.click(weeksInput);
    expect(weeksInput).toHaveFocus();
  });
});
