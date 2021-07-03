import { props } from "bluebird";
import { Fragment } from "react";

import styles from "./AboutMeModal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div>{props.children}</div>
    </div>
  );
};

const AboutMeModal = () => {
  return (
    <Fragment>
        <Backdrop onClose={props.onClose}/>
        <ModalOverlay>{props.children}</ModalOverlay>
    </Fragment>
  );
};

export default AboutMeModal;
