import {render, getByText} from '@testing-library/react';
import MealItem from './MealItem';

describe('<MealItem>', ()=> {
    it('renders with correct price', () => {
        const {getByText} = render(<MealItem price={1.123} name='Test' description='Description'/>);
        expect(getByText(/^\$1.12$/)).toBeTruthy();
        expect(getByText(/^Test$/i)).toBeTruthy();
        expect(getByText(/^description$/i)).toBeTruthy();
    })
})