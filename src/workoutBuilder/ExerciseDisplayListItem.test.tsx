import { act, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import testExerciseList from "../test-utils/testExerciseList";
import ExerciseDisplayListItem from "./ExerciseDisplayListItem";

const mockDeleteExercise = jest.fn();
const mockOpenModal = jest.fn();
const exerciseLocation = {
  day: 0,
  index: 0,
  subIndex: 0,
};

// Test Exercise 1
// {
//   name: "Leg Press",
//   muscleGroup: "Quads",
//   setScheme: "Sets",
//   numOfSets: "3",
//   repScheme: "Rep Range",
//   numOfReps: "10-12",
// }

// Test Exercise 2
// {
//   name: "Skiers",
// muscleGroup: "Delts",
// setScheme: "Sets",
// numOfSets: "3",
// repScheme: "Rep Goal",
// numOfReps: "45",
// note: "Drop set on last set",
// },

describe("<ExerciseDisplayListItem>", () => {
  test("renders correctly in the DOM without note", () => {
    const { getByRole, getAllByRole } = render(
      <ol>
        <li>
          <ExerciseDisplayListItem
            exercise={testExerciseList[0][0]}
            deleteExercise={mockDeleteExercise}
            openModal={mockOpenModal}
            exerciseLocation={exerciseLocation}
          />
        </li>
      </ol>
    );

    const listItem = getByRole("listitem");
    expect(listItem).toBeInTheDocument();
    expect(listItem).toHaveTextContent("Leg Press 3 x 10-12");

    const buttons = getAllByRole("button");
    expect(buttons.length).toBe(2);
    expect(buttons[0]).toHaveTextContent("Edit");
    expect(buttons[1]).toHaveTextContent("Delete");
  });

  test("renders correctly in the DOM with note", () => {
    const { getByRole, getAllByRole } = render(
      <ol>
        <li>
          <ExerciseDisplayListItem
            exercise={testExerciseList[2][2]}
            deleteExercise={mockDeleteExercise}
            openModal={mockOpenModal}
            exerciseLocation={exerciseLocation}
          />
        </li>
      </ol>
    );

    const listItem = getByRole("listitem");
    expect(listItem).toBeInTheDocument();
    expect(listItem).toHaveTextContent("Skiers 3 x 45RG");
    expect(listItem).not.toHaveTextContent("Drop set on last set");

    const buttons = getAllByRole("button");
    expect(buttons.length).toBe(3);
    expect(buttons[0]).toHaveTextContent("Edit");
    expect(buttons[1]).toHaveTextContent("Delete");
    expect(buttons[2]).toHaveTextContent("View note");
  });

  test("renders note with 'Hide note' button when 'View note' button is clicked", () => {
    const { getByRole, getAllByRole } = render(
      <ol>
        <li>
          <ExerciseDisplayListItem
            exercise={testExerciseList[2][2]}
            deleteExercise={mockDeleteExercise}
            openModal={mockOpenModal}
            exerciseLocation={exerciseLocation}
          />
        </li>
      </ol>
    );

    let buttons = getAllByRole("button");
    expect(buttons[2]).toHaveTextContent("View note");

    act(() => userEvent.click(buttons[2]));

    const listItem = getByRole("listitem");
    expect(listItem).toHaveTextContent("Drop set on last set");

    buttons = getAllByRole("button");
    expect(buttons[2]).toHaveTextContent("Hide note");
  });

  test("renders 'View note' button when 'Hide note' button is clicked", () => {
    const { getByRole, getAllByRole } = render(
      <ol>
        <li>
          <ExerciseDisplayListItem
            exercise={testExerciseList[2][2]}
            deleteExercise={mockDeleteExercise}
            openModal={mockOpenModal}
            exerciseLocation={exerciseLocation}
          />
        </li>
      </ol>
    );

    let buttons = getAllByRole("button");
    expect(buttons[2]).toHaveTextContent("View note");

    act(() => userEvent.click(buttons[2]));

    const listItem = getByRole("listitem");
    expect(listItem).toHaveTextContent("Drop set on last set");

    buttons = getAllByRole("button");
    expect(buttons[2]).toHaveTextContent("Hide note");

    act(() => userEvent.click(buttons[2]));

    expect(listItem).not.toHaveTextContent("Drop set on last set");
    buttons = getAllByRole("button");
    expect(buttons[2]).toHaveTextContent("View note");
  });

  test("calls deleteExercise when 'Delete' button is click", () => {
    const { getAllByRole } = render(
      <ol>
        <li>
          <ExerciseDisplayListItem
            exercise={testExerciseList[2][2]}
            deleteExercise={mockDeleteExercise}
            openModal={mockOpenModal}
            exerciseLocation={{
              day: 0,
              index: 0,
              subIndex: 1,
            }}
          />
        </li>
      </ol>
    );

    let buttons = getAllByRole("button");
    expect(buttons[1]).toHaveTextContent("Delete");

    userEvent.click(buttons[1]);
    expect(mockDeleteExercise).toHaveBeenCalled();
    expect(mockDeleteExercise).toHaveBeenCalledWith(0, 1);
  });
});
