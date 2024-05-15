import classes from './Modal.module.css';
import ReactDOM from 'react-dom';
import { Fragment } from 'react';

const Backdrop = (props) => {
    return <div onClick={props.onClose} className={classes.backdrop} />

};

const OverlayModal = (props) => {
    return (
        <div className={classes.modal} >
            <div>{props.children}</div>
        </div>
    )

};
const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
            {ReactDOM.createPortal(<OverlayModal>{props.children}</OverlayModal>, portalElement)}
        </Fragment>
    )
}

export default Modal;