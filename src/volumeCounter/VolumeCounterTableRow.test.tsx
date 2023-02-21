import { render } from "@testing-library/react";
import VolumeCounterTableRow from "./VolumeCounterTableRow";

describe("<VolumeCounterTableRow>", () => {
  test("renders correctly in the DOM", () => {
    const { getByRole } = render(
      <table>
        <tbody>
          <VolumeCounterTableRow
            exerciseName="Test Exercise"
            exerciseVolumeCount={1}
          />
        </tbody>
      </table>
    );

    const row = getByRole("row");
    expect(row).toBeInTheDocument();

    const rowHeader = getByRole("rowheader");
    expect(rowHeader).toBeInTheDocument();
    expect(rowHeader).toHaveTextContent("Test Exercise");

    const cell = getByRole("cell");
    expect(cell).toBeInTheDocument();
    expect(cell).toHaveTextContent("1");
  });
});
