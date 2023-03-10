import { PlusIcon } from "@heroicons/react/24/outline";
import ExerciseLocation from "../interfacesAndTypes/ExerciseLocation.interface";
import styles from "./AddExerciseButton.module.css";

interface Props {
  text: string;
  openModal: (exerciseLocation: ExerciseLocation) => void;
  exerciseLocation: { day: number; index: number; subIndex: number };
}

const AddExerciseButton = ({ text, openModal, exerciseLocation }: Props) => {
  return (
    <button
      type="button"
      onClick={() => openModal(exerciseLocation)}
      className={styles.button}
    >
      <span>{<PlusIcon className={styles.icon} />}</span>
      {`Add ${text}`}
    </button>
  );
};

export default AddExerciseButton;
