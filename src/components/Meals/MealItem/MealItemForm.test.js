import { getByText, getByLabelText, render } from "@testing-library/react";
import MealItemForm from "./MealItemForm";

describe('<MealItemForm>', () => {
    it('renders', () => {
       const {getByText, getByLabelText} =  render (<MealItemForm id={1} />);
       const input = getByLabelText(/^amount$/i);
       expect(input).toBeTruthy();
       expect(input.id).toEqual('amount_1');
       expect(getByText(/^amount$/i)).toBeTruthy();
    });
})