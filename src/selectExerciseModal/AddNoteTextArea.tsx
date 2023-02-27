import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

interface Props {
  note?: string;
  setNote: Dispatch<SetStateAction<string | undefined>>;
  setShowTextArea: Dispatch<SetStateAction<boolean>>;
}

const AddNoteTextArea = ({ note, setNote, setShowTextArea }: Props) => {
  const [localNoteState, setLocalNoteState] = useState(note);

  const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const note = event.target.value;
    setLocalNoteState(note);
  };

  const onSubmitHandler = () => {
    setNote(localNoteState);
    setShowTextArea(false);
  };

  return (
    <div>
      <div>
        <label htmlFor="note-textarea">{`${note ? "Edit" : "Add"} note`}</label>
        <textarea
          id="note-textarea"
          rows={5}
          cols={25}
          placeholder="e.g Dropset on last set."
          value={localNoteState}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <button type="button" onClick={onSubmitHandler}>
          {`${note ? "Edit" : "Add"} note`}
        </button>
        <button type="button" onClick={() => setShowTextArea(false)}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddNoteTextArea;
