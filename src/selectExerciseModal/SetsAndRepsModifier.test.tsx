import { act, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SetsAndRepsModifier from "./SetsAndRepsModifier";

describe("<SetsAndRepsModifier>", () => {
  test("correctly renders in the DOM", () => {
    const { getAllByRole } = render(<SetsAndRepsModifier />);

    const selects = getAllByRole("combobox");
    expect(selects.length).toBe(2);

    const numberInputs = getAllByRole("spinbutton");
    expect(numberInputs.length).toBe(2);
  });

  test("changes to range input when 'Set Range' option is selected", () => {
    const { getAllByRole } = render(<SetsAndRepsModifier />);

    const selects = getAllByRole("combobox");
    act(() => userEvent.selectOptions(selects[0], "Set Range"));

    const numberInputs = getAllByRole("spinbutton");
    expect(numberInputs.length).toBe(3);
  });

  test("changes to range input when 'Rep Range' option is selected", () => {
    const { getAllByRole } = render(<SetsAndRepsModifier />);

    const selects = getAllByRole("combobox");
    act(() => userEvent.selectOptions(selects[1], "Rep Range"));

    const numberInputs = getAllByRole("spinbutton");
    expect(numberInputs.length).toBe(3);
  });

  test("changes to range inputs when both 'Set Range' and 'Rep Range' options are selected", () => {
    const { getAllByRole } = render(<SetsAndRepsModifier />);

    const selects = getAllByRole("combobox");
    act(() => userEvent.selectOptions(selects[0], "Set Range"));
    act(() => userEvent.selectOptions(selects[1], "Rep Range"));

    const numberInputs = getAllByRole("spinbutton");
    expect(numberInputs.length).toBe(4);
  });

  test("change to single number input when 'Set Range' option is no longer selected", () => {
    const { getAllByRole } = render(<SetsAndRepsModifier />);

    const selects = getAllByRole("combobox");
    act(() => userEvent.selectOptions(selects[0], "Set Range"));
    let numberInputs = getAllByRole("spinbutton");
    expect(numberInputs.length).toBe(3);

    act(() => userEvent.selectOptions(selects[0], ["Sets"]));
    numberInputs = getAllByRole("spinbutton");
    expect(numberInputs.length).toBe(2);
  });

  test("change to single number input when 'Rep Range' option is no longer selected", () => {
    const { getAllByRole } = render(<SetsAndRepsModifier />);

    const selects = getAllByRole("combobox");
    act(() => userEvent.selectOptions(selects[1], "Rep Range"));
    let numberInputs = getAllByRole("spinbutton");
    expect(numberInputs.length).toBe(3);

    act(() => userEvent.selectOptions(selects[1], ["Rep Goal"]));
    numberInputs = getAllByRole("spinbutton");
    expect(numberInputs.length).toBe(2);
  });

  test("change to single number inputs when both 'Set Range' and 'Rep Range' options are no longer selected", () => {
    const { getAllByRole } = render(<SetsAndRepsModifier />);

    const selects = getAllByRole("combobox");
    act(() => userEvent.selectOptions(selects[0], "Set Range"));
    act(() => userEvent.selectOptions(selects[1], "Rep Range"));

    let numberInputs = getAllByRole("spinbutton");
    expect(numberInputs.length).toBe(4);

    act(() => userEvent.selectOptions(selects[0], ["Sets"]));
    act(() => userEvent.selectOptions(selects[1], ["Reps"]));
    numberInputs = getAllByRole("spinbutton");
    expect(numberInputs.length).toBe(2);
  });
});
