import React, { useState, Fragment }from "react";

import Card from "../UI/Card";
import ResumeModal from "./ResumeModal";
import picture from '../../Static/resume-small.jpg';
import styles from './Resume.module.css'

const Resume = () => {

  const [modalIsShown, setModalIsShown] = useState(false);

  const onClickHandler = () => {
    setModalIsShown(true);
  }

  const onCloseHandler = () => {
    setModalIsShown(false);
  }

  return (
    <Fragment>
      <Card onClick={onClickHandler}>
        <h2>Resume</h2>
        <img className={styles.picture} src={picture} alt="Small Resume"></img>
      </Card>
      {modalIsShown && <ResumeModal onClose={onCloseHandler}/>}
    </Fragment>
  );
};

export default Resume;
