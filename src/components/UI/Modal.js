import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = (props) => {
    return <div id='backdrop' className={classes.backdrop} onClick={props.onClose}></div>
}

const ModalOverlay = (props) => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const Modal = (props) => {
    const overlays = document.getElementById('overlays');

    return <>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, overlays)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, overlays)}
    </>
}

export default Modal;