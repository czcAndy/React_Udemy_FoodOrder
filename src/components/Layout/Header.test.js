import { fireEvent, getByRole, render } from '@testing-library/react';
import Header from './Header';

describe('<Header>', ()=> {
    it('renders', () => {
       const {getByRole} = render(<Header/>);
       expect(getByRole('img')).toBeTruthy();
    })

    it('forwards the cart click', () => {
        const handleShowCart = jest.fn();
        const {getByRole} = render(<Header onShowCart={handleShowCart}/>);
        fireEvent.click(getByRole('button'));
        expect(handleShowCart).toHaveBeenCalled();
    })
})
