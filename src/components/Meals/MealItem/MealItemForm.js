import { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const[amountIsValid, setAmountIsValid] = useState(1);
  const amountInputRef = useRef();

  const submitHandler = event => {
    event.preventDefault();


    const value = amountInputRef.current.value;
    const valueNumber = +value;

    console.log(valueNumber);

    if (valueNumber < 1) {
      setAmountIsValid(false);
      return;
    }    

    props.onAddCart(valueNumber);
  }


  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount</p>}
    </form>
  );
}

export default MealItemForm;
