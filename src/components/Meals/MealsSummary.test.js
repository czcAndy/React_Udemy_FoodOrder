import { render } from "@testing-library/react";
import MealsSummary from "./MealsSummary";

describe("<MealsSummary>", () => {
  it("renders", () => {
      expect(render(<MealsSummary/>)).toBeTruthy();
  });
});
