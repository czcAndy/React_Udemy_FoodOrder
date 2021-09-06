import {fireEvent, getByText, render, screen} from '@testing-library/react'
import Modal from "./Modal";

describe ('<Modal>', () => {

    beforeEach(() => {
        const modalRoot = global.document.createElement('div');
        modalRoot.setAttribute('id', 'overlays');
        const body = global.document.querySelector('body');
        body.appendChild(modalRoot);
    });

    it('renders', ()=>{
        render(<Modal/>, document.getElementById('overlays'));
    });

    it('renders with content', () => {
        const {getByText} = render(<Modal><div>Test</div></Modal>, document.getElementById('overlays'));
        expect(getByText(/^Test$/i)).toBeTruthy();
    });

    it('forwards close call', () => {
        const mock = jest.fn();
        render(<Modal onClose={mock}/>);
        const backdrop = document.getElementById('backdrop'); //screen. funtions don't make sense
        fireEvent.click(backdrop);
        expect(mock).toHaveBeenCalled();
    })
})