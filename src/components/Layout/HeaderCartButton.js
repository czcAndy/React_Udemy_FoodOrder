import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  
  const noItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button
      name="cart-button"
      className={classes.button}
      onClick={props.onClick}
    >
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{noItems}</span>
    </button>
  );
};

export default HeaderCartButton;
