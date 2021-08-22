import { render } from '@testing-library/react';
import Header from './Header';

describe('<Header>', ()=> {
    it('renders', () => {
       const {getByRole} = render(<Header/>);
       expect(getByRole('img')).toBeTruthy();
    })
})
