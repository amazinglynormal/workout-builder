import { useState } from "react";
import Exercise from "../interfacesAndTypes/Exercise.interface";
import ExerciseLocation from "../interfacesAndTypes/ExerciseLocation.interface";
import styles from "./ExerciseDisplayListItem.module.css";

interface Props {
  exercise: Exercise;
  deleteExercise: (index: number, subIndex: number) => void;
  openModal: (exerciseLocation: ExerciseLocation) => void;
  exerciseLocation: ExerciseLocation;
}

const ExerciseDisplayListItem = ({
  exercise,
  deleteExercise,
  openModal,
  exerciseLocation,
}: Props) => {
  const [showNote, setShowNote] = useState(false);

  return (
    <>
      <div className={styles.listItemLayout}>
        <div className={styles.listItemInfo}>
          {`${exercise.name} ${exercise.numOfSets} x ${exercise.numOfReps}${
            exercise.repScheme === "Rep Goal" ? "RG" : ""
          }`}
          <div>
            <button type="button" onClick={() => openModal(exerciseLocation)}>
              Edit
            </button>
            <button
              type="button"
              onClick={() =>
                deleteExercise(
                  exerciseLocation.index,
                  exerciseLocation.subIndex
                )
              }
            >
              Delete
            </button>
          </div>
        </div>
        {exercise.note && (
          <div className="">
            {showNote ? (
              <>
                <p>{`Note: ${exercise.note}`}</p>
                <button type="button" onClick={() => setShowNote(false)}>
                  Hide note
                </button>
              </>
            ) : (
              <button type="button" onClick={() => setShowNote(true)}>
                View note
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default ExerciseDisplayListItem;
