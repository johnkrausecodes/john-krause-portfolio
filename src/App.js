import styles from "./App.module.css";
import React, { Fragment } from "react";

import Header from "./Components/Layout/Header";
import AboutMe from "./Components/AboutMe/AboutMe";
import Resume from "./Components/Resume/Resume";
import GitHub from "./Components/GitHub/GitHub";

function App() {
  return (
    <Fragment>
      <div>
        <Header />
      </div>
      <div>
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
    </Fragment>
  );
}

export default App;
