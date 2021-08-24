import { getByText, getByLabelText, render } from "@testing-library/react";
import Input from "./Input";

describe("<Input>", () => {
  it("renders correctly with props", () => {
    const inputProps = {
      label: "test",
      input: {
        id: 1,
        defaultValue: 1,
        htmlFor: "test"
      }
    };

    const { getByText, getByLabelText } = render(
        <Input input={inputProps.input} label={inputProps.label}/>);

    expect(getByLabelText(/^test$/i)).toBeTruthy();
    expect(getByText(/^test$/i)).toBeTruthy();
  });
});
