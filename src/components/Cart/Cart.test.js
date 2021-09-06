import {render} from '@testing-library/react'
import Cart from './Cart';

describe('<Cart>', () => {
    beforeEach(() => {
        const modalRoot = global.document.createElement('div');
        modalRoot.setAttribute('id', 'overlays');
        const body = global.document.querySelector('body');
        body.appendChild(modalRoot);
    });

    it('renders', () => {
        render(<Cart/>, global.document.getElementById('overlays'));
    })
})
