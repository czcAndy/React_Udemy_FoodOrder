import { fireEvent, getByText, getByRole, render,screen } from '@testing-library/react';
import App from './App';


test('renders learn react link', () => {
  render(<App />);
});

test('shows modal window when clicking Cart button', () => {
  //Prepare the modal window placeholder
  const modalRoot = global.document.createElement('div');
  modalRoot.setAttribute('id', 'overlays');
  const body = global.document.querySelector('body');
  body.appendChild(modalRoot);
  
  render(<App/>);
  fireEvent.click(screen.getByRole('button', {name: /^Your cart*/i}));
  expect(screen.getByText(/^Total Amount$/i)).toBeTruthy();
});

test('shows modal window then closes it by clicking Close button', ()=> {
  //Prepare the modal window placeholder
  const modalRoot = global.document.createElement('div');
  modalRoot.setAttribute('id', 'overlays');
  const body = global.document.querySelector('body');
  body.appendChild(modalRoot);
  
  render(<App/>);
  fireEvent.click(screen.getByRole('button', {name: /^Your cart*/i}));
  expect(screen.getByText(/^Total Amount$/i)).toBeTruthy();

  fireEvent.click(screen.getByRole('button', {name: /^close$/i}));
  expect(screen.queryByText(/^Total Amount$/i)).toBeFalsy();
});

test('shows modal windown then closes it by clicking the modal backdrop', ()=> {
  //Prepare the modal window placeholder
  const modalRoot = global.document.createElement('div');
  modalRoot.setAttribute('id', 'overlays');
  const body = global.document.querySelector('body');
  body.appendChild(modalRoot);
  
  render(<App/>);
  fireEvent.click(screen.getByRole('button', {name: /^Your cart*/i}));
  expect(screen.getByText(/^Total Amount$/i)).toBeTruthy();

  fireEvent.click(document.getElementById('backdrop'));
  expect(screen.queryByText(/^Total Amount$/i)).toBeFalsy();
});

