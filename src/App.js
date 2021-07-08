import styles from "./App.module.css";
import React, { Fragment } from "react";

import Header from "./Components/Layout/Header";
import AboutMe from "./Components/AboutMe/AboutMe";
import Resume from "./Components/Resume/Resume";
import GitHub from "./Components/GitHub/GitHub";
import Footer from "./Components/Layout/Footer";
import picture from "./Static/Rz0kImo.jpg";

function App() {
  return (
    <Fragment>
      <header>
        <Header />
      </header>
      <div className={styles.sides}>
        <div>
          <img src={picture} className={styles.picture} alt="placeholder"></img>
        </div>
        <div className={styles.container}>
          <div className={styles.present}>
            <Resume />
          </div>
          <div className={styles.present}>
            <AboutMe />
          </div>
          <div className={styles.present}>
            <GitHub />
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
}

export default App;
