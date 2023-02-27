import { act, getAllByRole, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddNote from "./AddNote";

const mockSetNote = jest.fn();

describe("<AddNote>", () => {
  test("renders correctly in the DOM without note", () => {
    const { getByRole } = render(<AddNote setNote={mockSetNote} />);

    const addNoteButton = getByRole("button");
    expect(addNoteButton).toBeInTheDocument();
    expect(addNoteButton).toHaveTextContent("Add note");
  });

  test("renders correctly in the DOM with note", () => {
    const { getByRole } = render(
      <AddNote note="test note" setNote={mockSetNote} />
    );

    const editNoteButton = getByRole("button");
    expect(editNoteButton).toBeInTheDocument();
    expect(editNoteButton).toHaveTextContent("Edit note");
  });

  test("shows empty textarea with placeholder text when 'Add note` button is clicked", () => {
    const { getByRole } = render(<AddNote setNote={mockSetNote} />);

    const addNoteButton = getByRole("button");
    act(() => userEvent.click(addNoteButton));

    const textarea = getByRole("textbox");
    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveValue("");
  });

  test("shows textarea with placeholder text when 'Edit note` button is clicked", () => {
    const { getByRole } = render(
      <AddNote note="test note" setNote={mockSetNote} />
    );

    const editNoteButton = getByRole("button");
    act(() => userEvent.click(editNoteButton));

    const textarea = getByRole("textbox");
    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveValue("test note");
  });

  test("'Add note' button reappears after textarea is closed", () => {
    const { getByRole, getAllByRole } = render(
      <AddNote setNote={mockSetNote} />
    );

    const addNoteButton = getByRole("button");
    act(() => userEvent.click(addNoteButton));

    const buttons = getAllByRole("button");
    act(() => userEvent.click(buttons[1]));

    const originalButton = getAllByRole("button");
    expect(originalButton.length).toBe(1);
    expect(originalButton[0]).toHaveTextContent("Add note");
  });

  test("'Edit note' button reappears after textarea is closed", () => {
    const { getByRole, getAllByRole } = render(
      <AddNote note="test note" setNote={mockSetNote} />
    );

    const editNoteButton = getByRole("button");
    act(() => userEvent.click(editNoteButton));

    const buttons = getAllByRole("button");
    act(() => userEvent.click(buttons[1]));

    const originalButton = getAllByRole("button");
    expect(originalButton.length).toBe(1);
    expect(originalButton[0]).toHaveTextContent("Edit note");
  });
});
