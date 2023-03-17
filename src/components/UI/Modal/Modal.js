import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.scss";
import { CgClose } from "react-icons/cg";
import { CSSTransition } from "react-transition-group";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.modal__toggle}>
        <CgClose onClick={props.onClose} />
      </div>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <CSSTransition
          mountOnEnter
          unmountOnExit
          in={props.show}
          timeout={300}
          classNames={{
            enter: "",
            enterActive: classes.ModalOpen,
            exit: "",
            exitActive: classes.ModalClose,
          }}
        >
          <Backdrop onClose={props.onClose} />
        </CSSTransition>,
        portalElement
      )}

      {ReactDOM.createPortal(
        <CSSTransition
          mountOnEnter
          unmountOnExit
          in={props.show}
          timeout={300}
          classNames={{
            enter: "",
            enterActive: classes.ModalOpen,
            exit: "",
            exitActive: classes.ModalClose,
          }}
        >
          <ModalOverlay onClose={props.onClose}>{props.children}</ModalOverlay>
        </CSSTransition>,
        portalElement
      )}
    </>
  );
};

export default Modal;