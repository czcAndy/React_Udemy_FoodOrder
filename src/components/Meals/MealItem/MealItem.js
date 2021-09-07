import { useContext } from 'react';
import classes from './MealItem.module.css';
import MealItemForm  from './MealItemForm';
import CartContext from '../../../store/cart-context';


const MealItem = (props) => {
  const price = `$${props.item.price.toFixed(2)}`;

  const cartCtx = useContext(CartContext);

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id:props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.item.name}</h3>
        <div className={classes.description}>{props.item.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
          <MealItemForm id={props.item.id} onAddCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
