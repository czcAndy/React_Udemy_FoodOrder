import { render, fireEvent, screen } from "@testing-library/react";
import MealItem from "./MealItem";
import CartContext from '../../../store/cart-context';

describe("<MealItem>", () => {
  const customRender = (ui, { providerProps, ...renderOptions }) => {
    return render(
      <CartContext.Provider {...providerProps}>{ui}</CartContext.Provider>,
      renderOptions
    );
  };

  it("renders with correct price", () => {
    const item = {
      id: 1,
      price: 1.123,
      name: "Test",
      description: "Description",
    };

    const { getByText } = render(<MealItem item={item} />);
    expect(getByText(/^\$1.12$/)).toBeTruthy();
    expect(getByText(/^Test$/i)).toBeTruthy();
    expect(getByText(/^description$/i)).toBeTruthy();
  });

  it("adds a new item to the context", () => {
    const addItemMock = jest.fn();

    const item = {
      id: 1,
      price: 1.123,
      name: "Test"
    };

    const providerProps = {
        value: {
            items: [],
            addItem: addItemMock
        }
    }

    customRender(
      <MealItem item={item}/>, {providerProps}
    );

    let input = screen.getByRole("spinbutton", { name: "Amount" });
    fireEvent.change(input, { target: { value: 1 } });

    fireEvent.click(screen.getByRole("button", { name: "+ Add" }));
    expect(addItemMock).toHaveBeenCalledWith({...item, amount:1});
  });

  it("doesn't call the add function with incorrect values", () => {
    const addItemMock = jest.fn();

    const item = {
      id: 1,
      price: 1.123,
      name: "Test"
    };

    const providerProps = {
        value: {
            items: [],
            addItem: addItemMock
        }
    }

    customRender(
      <MealItem item={item}/>, {providerProps}
    );

    let input = screen.getByRole("spinbutton", { name: "Amount" });
    fireEvent.change(input, { target: { value: 6 } });
    fireEvent.click(screen.getByRole("button", { name: "+ Add" }));
    expect(addItemMock).not.toBeCalled();

    fireEvent.change(input, { target: { value: 0 } });
    fireEvent.click(screen.getByRole("button", { name: "+ Add" }));
    expect(addItemMock).not.toBeCalled();

    fireEvent.change(input, { target: { value: -1 } });
    fireEvent.click(screen.getByRole("button", { name: "+ Add" }));
    expect(addItemMock).not.toBeCalled();

    fireEvent.change(input, { target: { value: 'a' } });
    fireEvent.click(screen.getByRole("button", { name: "+ Add" }));
    expect(addItemMock).not.toBeCalled();
  });
});
