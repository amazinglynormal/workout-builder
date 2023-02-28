import { PlusIcon } from "@heroicons/react/24/outline";
import { Dispatch, SetStateAction } from "react";

interface Props {
  text: string;
  onClickHandler: Dispatch<SetStateAction<string>>;
}

const AddExerciseButton = ({ text, onClickHandler }: Props) => {
  return (
    <button type="button" onClick={() => onClickHandler(text)}>
      <span>{<PlusIcon />}</span>
      {`Add ${text}`}
    </button>
  );
};

export default AddExerciseButton;
