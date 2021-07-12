import React from "react";
import { Fragment, useState } from "react";

import Card from "../UI/Card";
import AboutMeModal from "./AboutMeModal";
import picture from "../../Static/casual.jpg";
import styles from "./AboutMe.module.css"

const AboutMe = () => {

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
        <h2>About Me</h2>
        <img src={picture} className={styles.picture} alt="Casual me"></img>
      </Card>
      {modalIsShown && <AboutMeModal onClose={onCloseHandler}/>}
    </Fragment>
  );
};

export default AboutMe;
