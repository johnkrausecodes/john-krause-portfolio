import React from "react";
import { Fragment, useState } from "react";

import Card from "../UI/Card";
import AboutMeModal from "./AboutMeModal";

const AboutMe = () => {

  const [modalIsShown, setModalIsShown] = useState(false);


  return (
    <Fragment>
      <Card>
        <h2>About Myself</h2>
      </Card>
      {modalIsShown && <AboutMeModal/>}
    </Fragment>
  );
};

export default AboutMe;
