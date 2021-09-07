import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cardReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

    return {
        items: updatedItems,
        totalAmount: updatedTotalAmount
    }
  } else if (action.type === "REMOVE") {
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispachCartAction] = useReducer(
    cardReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispachCartAction({ type: "ADD", item: item });
  };

  const removeItem = (id) => {
    dispachCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItem,
  };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
