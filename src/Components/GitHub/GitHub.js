import React from "react";

import Card from "../UI/Card";
import picture from '../../Static/photo-1555952494-efd681c7e3f9.jpg';
import styles from './GitHub.module.css';

const openGitHub = () => {
  window.open("https://github.com/johnkrausecodes")
};

const GitHub = () => {
  return (
    <Card onClick={openGitHub}>
      <h2 className={styles.h2}>GitHub</h2>
      <img className={styles.picture} src={picture} alt="Coding"></img>
    </Card>
  );
};

export default GitHub;
