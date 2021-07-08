import { Fragment } from "react";

import styles from "./AboutMeModal.module.css";
import picture from "../../Static/fitz.jpg"

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <h3>Hello</h3>
      <p>My name is john</p>


      <img src={picture} alt="My dog Fitz"></img>

      <button className={styles.button} onClick={props.onClose}>OK</button>
    </div>
  );
};

const AboutMeModal = (props) => {
  return (
    <Fragment>
        <Backdrop onClose={props.onClose}/>
        <ModalOverlay onClose={props.onClose}/>
    </Fragment>
  );
};

export default AboutMeModal;
