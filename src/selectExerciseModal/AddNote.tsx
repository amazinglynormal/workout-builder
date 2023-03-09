import { Dispatch, useState } from "react";
import { PencilIcon, PlusIcon } from "@heroicons/react/24/outline";
import AddNoteTextArea from "./AddNoteTextArea";
import { ExerciseReducerAction } from "./SelectExerciseModal";

interface Props {
  note?: string;
  setNote: Dispatch<ExerciseReducerAction>;
}

const AddNote = ({ note, setNote }: Props) => {
  const [showTextBox, setShowTextBox] = useState(false);

  return (
    <div>
      {showTextBox ? (
        <AddNoteTextArea
          note={note}
          setNote={setNote}
          setShowTextArea={setShowTextBox}
        />
      ) : (
        <button type="button" onClick={() => setShowTextBox(true)}>
          <span>{note ? <PencilIcon /> : <PlusIcon />}</span>
          {`${note ? "Edit" : "Add"} note`}
        </button>
      )}
    </div>
  );
};

export default AddNote;
