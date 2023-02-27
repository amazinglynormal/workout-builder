import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import styles from "./DayHeader.module.css";

interface Props {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
}

const DayHeader = ({ title, setTitle }: Props) => {
  const [showTitleChangeInput, setShowTitleChangeInput] = useState(false);
  const [inputTitle, setInputTitle] = useState(title);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInputTitle(event.target.value);
  };

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTitle(inputTitle);
    setShowTitleChangeInput(false);
  };

  return (
    <header className={styles.border}>
      <div>
        {showTitleChangeInput ? (
          <>
            <form onSubmit={onSubmitHandler}>
              <label htmlFor="change-title">Change day title</label>
              <input
                type="text"
                value={inputTitle}
                onChange={onChangeHandler}
                id="change-title"
              />
              <button
                type="button"
                onClick={() => setShowTitleChangeInput(false)}
              >
                Cancel
              </button>
            </form>
          </>
        ) : (
          <>
            <h3>{title}</h3>
            <button type="button" onClick={() => setShowTitleChangeInput(true)}>
              change
            </button>
          </>
        )}
      </div>
      <button type="button">Clear day</button>
    </header>
  );
};

export default DayHeader;
