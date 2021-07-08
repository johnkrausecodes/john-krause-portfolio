import { Fragment } from "react";

import styles from "./ResumeModal.module.css";
import picture from '../../Static/resume.jpg';

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <img className={styles.picture} src={picture} alt="Coding"></img>



      <button className={styles.downloadbutton}>Download</button>
      <button className={styles.button} onClick={props.onClose}>OK</button>
      

    </div>
  );
};

const ResumeModal = (props) => {
  return (
    <Fragment>
        <Backdrop onClose={props.onClose}/>
        <ModalOverlay onClose={props.onClose}/>
    </Fragment>
  );
};

export default ResumeModal;
