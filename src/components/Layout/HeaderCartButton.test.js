import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import React from "react";
import CartContext from "../../store/cart-context";
import HeaderCartButton from "./HeaderCartButton";

const customRender = (ui, { providerProps, ...renderOptions }) => {
  return render(
    <CartContext.Provider {...providerProps}>{ui}</CartContext.Provider>,
    renderOptions
  );
};

describe("<HeaderCartButton>", () => {

  it("renders", () => {
    expect(render(<HeaderCartButton />)).toBeTruthy();
  });

  it("forwads the click", () => {
    const handleClick = jest.fn();
    const { getByRole } = render(<HeaderCartButton onClick={handleClick} />);
    fireEvent.click(getByRole("button"));
    expect(handleClick).toHaveBeenCalled();
  });

  it("renders correctly within cart context", () => {
    const providerProps = {
      value: {
        items: [{ amount: 1 }, { amount: 3 }],
      }
    };

    customRender(<HeaderCartButton/>, {providerProps})

    expect(screen.getByRole("button", { name: /^Your cart 4$/i })).toBeTruthy();
  });
});