import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddNoteTextArea from "./AddNoteTextArea";

const mockSetNote = jest.fn();
const mockSetShowTextArea = jest.fn();

describe("<AddNoteTextArea>", () => {
  test("renders correctly in the DOM without note", () => {
    const { getAllByRole, getByLabelText } = render(
      <AddNoteTextArea
        setNote={mockSetNote}
        setShowTextArea={mockSetShowTextArea}
      />
    );

    const textarea = getByLabelText("Add note");
    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveAttribute("placeholder", "e.g Dropset on last set.");

    const buttons = getAllByRole("button");
    expect(buttons.length).toBe(2);
    expect(buttons[0]).toHaveTextContent("Add note");
    expect(buttons[1]).toHaveTextContent("Cancel");
  });

  test("renders correctly in the DOM with note", () => {
    const { getAllByRole, getByLabelText } = render(
      <AddNoteTextArea
        note="This is a test note"
        setNote={mockSetNote}
        setShowTextArea={mockSetShowTextArea}
      />
    );

    const textarea = getByLabelText("Edit note");
    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveValue("This is a test note");

    const buttons = getAllByRole("button");
    expect(buttons.length).toBe(2);
    expect(buttons[0]).toHaveTextContent("Edit note");
    expect(buttons[1]).toHaveTextContent("Cancel");
  });

  test("setShowTextArea is called on 'Cancel' click", () => {
    const { getAllByRole } = render(
      <AddNoteTextArea
        note="This is a test note"
        setNote={mockSetNote}
        setShowTextArea={mockSetShowTextArea}
      />
    );

    const buttons = getAllByRole("button");
    userEvent.click(buttons[1]);
    expect(mockSetShowTextArea).toHaveBeenCalled();
  });

  test("setNote and setShowTextArea are called on 'Add note' click", () => {
    const { getAllByRole } = render(
      <AddNoteTextArea
        note="This is a test note"
        setNote={mockSetNote}
        setShowTextArea={mockSetShowTextArea}
      />
    );

    const buttons = getAllByRole("button");
    userEvent.click(buttons[0]);
    expect(mockSetNote).toHaveBeenCalled();
    expect(mockSetShowTextArea).toHaveBeenCalled();
  });
});
