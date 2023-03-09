import { render, RenderOptions } from "@testing-library/react";
import { ReactElement } from "react";
import { TestWorkoutProgramProvider } from "../context/WorkoutProgramContext";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <TestWorkoutProgramProvider>{children}</TestWorkoutProgramProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
