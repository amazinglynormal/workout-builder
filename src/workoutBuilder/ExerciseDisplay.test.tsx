import { render } from "../test-utils/test-utils";
import ExerciseDisplay from "./ExerciseDisplay";
import testExerciseList from "../test-utils/testExerciseList";

const mockOpenModal = jest.fn();
const mockDispatch = jest.fn();

const day = 0;

describe("<ExerciseDisplay>", () => {
  test("renders correctly in the DOM", () => {
    const { getAllByRole } = render(
      <ExerciseDisplay
        day={day}
        openModal={mockOpenModal}
        dispatch={mockDispatch}
        exercises={testExerciseList}
      />
    );
    const ols = getAllByRole("list");
    expect(ols.length).toBe(4);

    const listItems = getAllByRole("listitem");
    expect(listItems.length).toBe(12); // 9 individual li + 3 li that contain sub listItems

    const buttons = getAllByRole("button");

    const addExerciseButtons = buttons.filter(
      (button) =>
        button.textContent === "Add exercise" ||
        button.textContent === "Add giantset" ||
        button.textContent === "Add superset"
    );
    expect(addExerciseButtons.length).toBe(6); // 6 add
  });
});
