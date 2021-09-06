import {getByText, render} from '@testing-library/react'
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
    })
})