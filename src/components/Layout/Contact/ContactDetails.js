import React from "react";
import Modal from "../../UI/Modal/Modal";
import classes from "./ContactDetails.module.scss";
import { GrLinkedin } from "react-icons/gr";
import {MdOutlineAlternateEmail} from "react-icons/md";

const ContactModal = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <div className={classes.contactDetails}>
        <div className={classes.contactDetails__heading}>
          <h4>Let's get in touch!</h4>
          <p>Choose your way to contact me</p>
        </div>
        <div className={classes.contactDetails__links}>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/bartosz-oskar-walczak/"
          >
            <GrLinkedin /> LinkedIn
          </a>
          <a href="mailto:bo.walczak@wp.pl">
            <MdOutlineAlternateEmail /> bo.walczak@wp.pl
          </a>
        </div>
      </div>
    </Modal>
  );
};

export default ContactModal;
