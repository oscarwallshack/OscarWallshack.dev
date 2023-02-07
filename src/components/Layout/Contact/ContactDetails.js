import React from "react";
import Modal from "../../UI/Modal/Modal";
import classes from "./ContactDetails.module.scss";

const ContactModal = ({onClose}) => {
  return (
    <Modal onClose={onClose}>
      <h4>Contact!</h4>
    </Modal>
  );
};

export default ContactModal;
