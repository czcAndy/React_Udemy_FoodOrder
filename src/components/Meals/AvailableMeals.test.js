import {render, getByText} from '@testing-library/react';
import AvailableMeals from './AvailableMeals';

describe('<AvailableMeals>', () => {
    it('renders', () => {
        const {getByText} = render(<AvailableMeals/>);
        expect(getByText(/^sushi$/i)).toBeTruthy();
        expect(getByText(/^schnitzel$/i)).toBeTruthy();
        expect(getByText(/^barbecue burger$/i)).toBeTruthy();
        expect(getByText(/^green bowl$/i)).toBeTruthy();
    })
})