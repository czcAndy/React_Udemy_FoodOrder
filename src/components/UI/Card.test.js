import { getByText, render } from "@testing-library/react";
import Card from './Card';

describe("<Card>", () => {
  it("renders", () => {
    const div = <div>Test</div>;
    const {getByText} = render(<Card children={div} />);
    expect(getByText('Test')).toBeTruthy();
  });
});
