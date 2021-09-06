import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = (props) => {
    return <div className={classes.backdrop}></div>
}

const ModalOverlay = (props) => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const Modal = (props) => {
    const overlays = document.getElementById('overlays');
    
    return <>
        {ReactDOM.createPortal(<Backdrop/>, overlays)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, overlays)}
    </>
}

export default Modal;