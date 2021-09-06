import {fireEvent, render, screen} from '@testing-library/react'
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
    });

    it('forwards call to close Modal by clicking close btn', () => {
        const mock = jest.fn();
        render(<Cart onClose={mock}/>);
        fireEvent.click(screen.getByRole('button', {name: /^close$/i}));

        expect(mock).toHaveBeenCalled();
    });

    it('forwards call to close Modal by clicking modal backdrop', () => {
        const mock = jest.fn();
        render(<Cart onClose={mock}/>);
        const backdrop = document.getElementById('backdrop');
        fireEvent.click(backdrop);

        expect(mock).toHaveBeenCalled();
    });
})
