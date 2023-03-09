import { render } from "@testing-library/react";
import VolumeCounter from "./VolumeCounter";
import testWorkoutObject from "../test-utils/testWorkoutProgram";

describe("<VolumeCounter>", () => {
  test("renders correctly in the DOM", () => {
    const { getByRole, getByText } = render(
      <VolumeCounter workoutProgram={testWorkoutObject} />
    );

    const heading = getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Volume Counter");

    const paragraph = getByText(
      "Estimate of direct sets for each muscle group. Muscles targeted by an exercise will vary with an individuals technique."
    );
    expect(paragraph).toBeInTheDocument();

    const table = getByRole("table");
    expect(table).toBeInTheDocument();
  });
});
