import HomeHeader from "./HomeHeader";
import { render } from "@testing-library/react";

describe("<Header>", () => {
  test("correctly renders in the dom", () => {
    const { getByRole, getByText } = render(<HomeHeader />);

    const header = getByRole("heading");

    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent("Free Workout Builder");

    const subHeadingOne = getByText(
      "Put together a workout that suits your needs and goals then download as a pdf."
    );
    expect(subHeadingOne).toBeInTheDocument();

    const subHeadingTwo = getByText("FOR FREE!!!");
    expect(subHeadingTwo).toBeInTheDocument();
  });
});
