import { act, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DayHeader from "./DayHeader";

const mockReducerDispatch = jest.fn();

describe("<DayHeader>", () => {
  test("renders correctly in the DOM", () => {
    const { getByRole, getAllByRole } = render(
      <DayHeader title="test title" day={0} dispatch={mockReducerDispatch} />
    );

    const title = getByRole("heading");
    expect(title).toHaveTextContent("test title");

    const buttons = getAllByRole("button");
    expect(buttons.length).toBe(2);
    expect(buttons[0]).toHaveTextContent("change");
    expect(buttons[1]).toHaveTextContent("Reset day");
  });

  test("renders input instead heading when 'change' button is clicked", () => {
    const { getByRole, getAllByRole, getByLabelText } = render(
      <DayHeader title="test title" day={0} dispatch={mockReducerDispatch} />
    );

    const title = getByRole("heading");
    expect(title).toHaveTextContent("test title");

    const buttons = getAllByRole("button");

    act(() => userEvent.click(buttons[0]));

    expect(title).not.toBeInTheDocument();

    const input = getByLabelText("Change day title");
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("test title");
  });

  test("calls reducerDispatch when form is submitted", () => {
    const { getByRole, getAllByRole, getByLabelText } = render(
      <DayHeader title="test title" day={0} dispatch={mockReducerDispatch} />
    );

    const buttons = getAllByRole("button");

    act(() => userEvent.click(buttons[0]));

    const input = getByLabelText("Change day title");

    act(() => userEvent.type(input, "testing{Enter}"));
    expect(mockReducerDispatch).toHaveBeenCalled();
  });

  test("renders header instead of input when form is submitted", () => {
    const { getByRole, getAllByRole, getByLabelText } = render(
      <DayHeader title="test title" day={0} dispatch={mockReducerDispatch} />
    );

    let title = getByRole("heading");
    expect(title).toHaveTextContent("test title");

    const buttons = getAllByRole("button");

    act(() => userEvent.click(buttons[0]));

    expect(title).not.toBeInTheDocument();

    const input = getByLabelText("Change day title");
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("test title");

    userEvent.click(input);

    act(() => userEvent.keyboard("{Enter}"));

    expect(input).not.toBeInTheDocument();

    title = getByRole("heading");
    expect(title).toBeInTheDocument();
  });

  test("renders header instead of input when 'cancel' button is clicked", () => {
    const { getByRole, getAllByRole, getByLabelText } = render(
      <DayHeader title="test title" day={0} dispatch={mockReducerDispatch} />
    );

    let title = getByRole("heading");
    expect(title).toHaveTextContent("test title");

    let buttons = getAllByRole("button");

    act(() => userEvent.click(buttons[0]));

    const input = getByLabelText("Change day title");
    expect(input).toBeInTheDocument();

    buttons = getAllByRole("button");
    act(() => userEvent.click(buttons[0]));

    expect(input).not.toBeInTheDocument();

    title = getByRole("heading");
    expect(title).toBeInTheDocument();
  });

  test("calls reducerDispatch with correct arguments when 'Reset day' button is clicked", () => {
    const { getAllByRole } = render(
      <DayHeader title="test title" day={0} dispatch={mockReducerDispatch} />
    );

    const buttons = getAllByRole("button");
    expect(buttons[1]).toHaveTextContent("Reset day");

    userEvent.click(buttons[1]);
    expect(mockReducerDispatch).toHaveBeenCalledWith({
      type: "RESET_DAY",
      day: 0,
    });
  });
});
