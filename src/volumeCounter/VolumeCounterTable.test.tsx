import { render } from "../test-utils/test-utils";
import VolumeCounterTable from "./VolumeCounterTable";

describe("<VolumeCounterTable>", () => {
  test("renders correctly in the DOM", () => {
    const { getAllByRole, getByRole } = render(<VolumeCounterTable />);

    const table = getByRole("table");
    expect(table).toBeInTheDocument();

    const tBody = getByRole("rowgroup");
    expect(tBody).toBeInTheDocument();

    const rowHeaders = getAllByRole("rowheader");
    expect(rowHeaders[0]).toHaveTextContent("Chest");
    expect(rowHeaders[1]).toHaveTextContent("Quads");
    expect(rowHeaders[2]).toHaveTextContent("Triceps");
    expect(rowHeaders[3]).toHaveTextContent("Calves");
    expect(rowHeaders[4]).toHaveTextContent("Delts");
    expect(rowHeaders[5]).toHaveTextContent("Abs");
    expect(rowHeaders[6]).toHaveTextContent("Back (Horizontal)");
    expect(rowHeaders[7]).toHaveTextContent("Back (Vertical)");
    expect(rowHeaders[8]).toHaveTextContent("Forearms");
    expect(rowHeaders[9]).toHaveTextContent("Hamstrings");
    expect(rowHeaders[10]).toHaveTextContent("Biceps");
    expect(rowHeaders[11]).toHaveTextContent("Glutes");
    expect(rowHeaders[12]).toHaveTextContent("Neck");
    expect(rowHeaders[13]).toHaveTextContent("Traps");

    const cells = getAllByRole("cell");
    expect(cells[0]).toHaveTextContent("9");
    expect(cells[1]).toHaveTextContent("9");
    expect(cells[2]).toHaveTextContent("9");
    expect(cells[3]).toHaveTextContent("8");
    expect(cells[4]).toHaveTextContent("8");
    expect(cells[5]).toHaveTextContent("6");
    expect(cells[6]).toHaveTextContent("6");
    expect(cells[7]).toHaveTextContent("6");
    expect(cells[8]).toHaveTextContent("6");
    expect(cells[9]).toHaveTextContent("6");
    expect(cells[10]).toHaveTextContent("3");
    expect(cells[11]).toHaveTextContent("3");
    expect(cells[12]).toHaveTextContent("0");
    expect(cells[13]).toHaveTextContent("0");
  });
});
